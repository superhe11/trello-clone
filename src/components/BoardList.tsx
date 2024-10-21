import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from '../store/boardsSlice';
import type { RootState, AppDispatch } from '../store';
import {
    addBoardWithActivity,
    deleteBoardWithActivity,
    updateBoardTitleWithActivity
} from '../store/thunkActions';
import * as styles from '../styles/BoardList.css';
import { BoardItem } from './mapBoard';

export const BoardList: React.FC = () => {
    const boards = useSelector((state: RootState) =>
        state.boards.allIds.map((id) => state.boards.boards[id])
    );
    const selectedBoardId = useSelector(
        (state: RootState) => state.boards.selectedBoardId
    );
    const dispatch = useDispatch<AppDispatch>();
    const [newBoardTitle, setNewBoardTitle] = useState('');
    const [editingBoardId, setEditingBoardId] = useState<string | null>(null);
    const [editedBoardTitle, setEditedBoardTitle] = useState('');

    const handleAddBoard = () => {
        if (newBoardTitle.trim()) {
            dispatch(addBoardWithActivity(newBoardTitle.trim()));
            setNewBoardTitle('');
        }
    };

    const handleSelectBoard = (boardId: string) => {
        dispatch(selectBoard(boardId));
    };

    const handleDeleteBoard = (boardId: string, boardTitle: string) => {
        dispatch(deleteBoardWithActivity(boardId, boardTitle));
    };

    const handleEditBoard = (boardId: string, currentTitle: string) => {
        setEditingBoardId(boardId);
        setEditedBoardTitle(currentTitle);
    };

    const handleSaveBoardTitle = (boardId: string) => {
        if (editedBoardTitle.trim()) {
            dispatch(
                updateBoardTitleWithActivity(boardId, editedBoardTitle.trim())
            );
        }
        setEditingBoardId(null);
        setEditedBoardTitle('');
    };

    return (
        <div className={styles.boardList}>
            <h2>Boards</h2>
            <ul>
                {boards.map((board) => (
                    <BoardItem
                        key={board.id}
                        board={board}
                        selectedBoardId={selectedBoardId}
                        editingBoardId={editingBoardId}
                        editedBoardTitle={editedBoardTitle}
                        handleSelectBoard={handleSelectBoard}
                        handleEditBoard={handleEditBoard}
                        handleDeleteBoard={handleDeleteBoard}
                        setEditedBoardTitle={setEditedBoardTitle}
                        handleSaveBoardTitle={handleSaveBoardTitle}
                    />
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newBoardTitle}
                    onChange={(e) => setNewBoardTitle(e.target.value)}
                    placeholder="New board title"
                    className={styles.inputField}
                />
                <button className={styles.addButton} onClick={handleAddBoard}>
                    <i className="fas fa-plus"></i> Add Board
                </button>
            </div>
        </div>
    );
};
