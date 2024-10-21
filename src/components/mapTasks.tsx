import { Draggable } from 'react-beautiful-dnd';
import * as styles from '../styles/List.css';
import { Task as TaskType } from '../types';
import { Task } from './Task';

interface TaskItemProps {
    task: TaskType;
    index: number;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    className={styles.taskContainer}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Task task={task} />
                </div>
            )}
        </Draggable>
    );
};
