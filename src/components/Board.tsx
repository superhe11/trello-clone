import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { List } from './List';
import {
    moveTaskWithActivity,
    addListWithActivity
} from '../store/thunkActions';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import * as styles from '../styles/Board.css';

export const Board: React.FC = () => {
    const selectedBoardId = useSelector(
        (state: RootState) => state.boards.selectedBoardId
    );
    const board = useSelector((state: RootState) =>
        selectedBoardId ? state.boards.boards[selectedBoardId] : null
    );
    const listIds = useSelector((state: RootState) =>
        selectedBoardId ? state.lists.listsByBoard[selectedBoardId] || [] : []
    );
    const lists = useSelector((state: RootState) =>
        listIds.map((id) => state.lists.lists[id])
    );
    const dispatch = useDispatch<AppDispatch>();
    const [newListTitle, setNewListTitle] = useState('');

    if (!board) return <div>Select a board</div>;

    const handleAddList = () => {
        if (newListTitle.trim()) {
            dispatch(addListWithActivity(board.id, newListTitle));
            setNewListTitle('');
        }
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination, draggableId, type } = result;

        if (!destination) return;

        if (type === 'TASK') {
            dispatch(
                moveTaskWithActivity({
                    sourceListId: source.droppableId,
                    destListId: destination.droppableId,
                    sourceIndex: source.index,
                    destIndex: destination.index,
                    taskId: draggableId
                })
            );
        }
    };

    return (
        <div className={styles.boardWrapper}>
            <DragDropContext onDragEnd={onDragEnd}>
                {lists.map((list, index) => (
                    <List key={list.id} list={list} index={index} />
                ))}
            </DragDropContext>
            <div className={styles.addListContainer}>
                <input
                    type="text"
                    value={newListTitle}
                    onChange={(e) => setNewListTitle(e.target.value)}
                    placeholder="New list title"
                    className={styles.addListInput}
                />
                <button
                    className={styles.addListButton}
                    onClick={handleAddList}
                >
                    <i className="fas fa-plus"></i> Add List
                </button>
            </div>
        </div>
    );
};
