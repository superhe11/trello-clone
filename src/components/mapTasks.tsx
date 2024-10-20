import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../components/Task';
import * as styles from '../styles/List.css';
import { Task as TaskType } from '../types';

export const renderTaskList = (tasks: TaskType[]) =>
    tasks.map((task, index) => (
        <Draggable draggableId={task.id} index={index} key={task.id}>
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
    ));
