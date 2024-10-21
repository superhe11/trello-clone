import { useState, useEffect } from 'react';
import { TaskModal } from './TaskModal';
import { Task as TaskType } from '../types';
import type { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import {
    deleteTaskWithActivity,
    updateTaskTitleWithActivity
} from '../store/thunkActions';
import * as styles from '../styles/Task.css';

interface TaskProps {
    task: TaskType;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [editedTaskTitle, setEditedTaskTitle] = useState(task.title);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!isEditingTitle) {
            setEditedTaskTitle(task.title);
        }
    }, [task.title, isEditingTitle]);

    const handleClick = () => {
        if (!isEditingTitle) {
            setModalOpen(true);
        }
    };
    const handleClose = () => setModalOpen(false);

    const handleDeleteTask = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(deleteTaskWithActivity(task.listId, task.id, task.title));
    };

    const handleEditTaskTitle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setEditedTaskTitle(task.title);
        setIsEditingTitle(true);
    };

    const handleSaveTaskTitle = () => {
        if (editedTaskTitle.trim() && editedTaskTitle !== task.title) {
            dispatch(
                updateTaskTitleWithActivity(task.id, editedTaskTitle.trim())
            );
        }
        setIsEditingTitle(false);
    };

    return (
        <>
            <div className={styles.taskContainer} onClick={handleClick}>
                {isEditingTitle ? (
                    <input
                        type="text"
                        value={editedTaskTitle}
                        onChange={(e) => setEditedTaskTitle(e.target.value)}
                        onBlur={handleSaveTaskTitle}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSaveTaskTitle();
                            }
                        }}
                        className={styles.taskTitleInput}
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                    />
                ) : (
                    <span className={styles.taskTitle}>{task.title}</span>
                )}
                <div className={styles.taskButtons}>
                    <button
                        className={styles.iconButton}
                        onClick={handleEditTaskTitle}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        className={styles.iconButton}
                        onClick={handleDeleteTask}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            {isModalOpen && <TaskModal task={task} onClose={handleClose} />}
        </>
    );
};
