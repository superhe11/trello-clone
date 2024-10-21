import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../types';
import { updateTaskDescriptionWithActivity } from '../store/thunkActions';
import * as styles from '../styles/TaskModal.css';
import type { AppDispatch } from '../store';

interface TaskModalProps {
    task: Task;
    onClose: () => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({ task, onClose }) => {
    const [description, setDescription] = useState(task.description);
    const dispatch = useDispatch<AppDispatch>();

    const handleSaveDescription = () => {
        dispatch(updateTaskDescriptionWithActivity(task.id, description));
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2 className={styles.modalTitle}>{task.title}</h2>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.descriptionInput}
                    placeholder="Add description..."
                ></textarea>
                <button
                    className={styles.saveButton}
                    onClick={handleSaveDescription}
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
};
