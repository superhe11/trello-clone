import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import * as styles from '../styles/List.css';
import { List as ListType } from '../types';
import type { RootState, AppDispatch } from '../store';
import {
    addTaskWithActivity,
    deleteListWithActivity,
    updateListTitleWithActivity
} from '../store/thunkActions';
import { TaskItem } from './mapTasks';

interface ListProps {
    list: ListType;
    index: number;
}

export const List: React.FC<ListProps> = ({ list }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const boardId = useSelector(
        (state: RootState) => state.boards.selectedBoardId
    )!;
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [editedListTitle, setEditedListTitle] = useState(list.title);

    const handleAddTask = () => {
        if (newTaskTitle.trim()) {
            dispatch(addTaskWithActivity(list.id, newTaskTitle));
            setNewTaskTitle('');
        }
    };

    const handleDeleteList = () => {
        dispatch(deleteListWithActivity(boardId, list.id, list.title));
    };

    const handleEditListTitle = () => {
        setIsEditingTitle(true);
    };

    const handleSaveListTitle = () => {
        if (editedListTitle.trim()) {
            dispatch(
                updateListTitleWithActivity(
                    boardId,
                    list.id,
                    editedListTitle.trim()
                )
            );
        }
        setIsEditingTitle(false);
    };

    return (
        <div className={styles.listContainer}>
            <div className={styles.listHeader}>
                {isEditingTitle ? (
                    <input
                        type="text"
                        value={editedListTitle}
                        onChange={(e) => setEditedListTitle(e.target.value)}
                        onBlur={handleSaveListTitle}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSaveListTitle();
                            }
                        }}
                        className={styles.listTitleInput}
                    />
                ) : (
                    <span className={styles.listTitle}>{list.title}</span>
                )}
                <div className={styles.listHeaderButtons}>
                    <button
                        className={styles.iconButton}
                        onClick={handleEditListTitle}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        className={styles.iconButton}
                        onClick={handleDeleteList}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <Droppable droppableId={list.id} type="TASK">
                {(provided) => (
                    <div
                        className={styles.taskList}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {list.tasks.map((task, index) => (
                            <TaskItem key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                        <div className={styles.addTaskContainer}>
                            <input
                                type="text"
                                value={newTaskTitle}
                                onChange={(e) =>
                                    setNewTaskTitle(e.target.value)
                                }
                                placeholder="New task title"
                                className={styles.addTaskInput}
                            />
                            <button
                                className={styles.addTaskButton}
                                onClick={handleAddTask}
                            >
                                <i className="fas fa-plus"></i> Add Task
                            </button>
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    );
};
