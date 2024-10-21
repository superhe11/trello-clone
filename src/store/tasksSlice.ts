import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types';

interface TasksState {
    tasks: { [id: string]: Task };
    allIds: string[];
    tasksByList: { [listId: string]: string[] };
}

const initialState: TasksState = {
    tasks: {},
    allIds: [],
    tasksByList: {}
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(
            state,
            action: PayloadAction<{ id: string; listId: string; title: string }>
        ) {
            const { id, listId, title } = action.payload;
            state.tasks[id] = { id, listId, title, description: '' };
            state.allIds.push(id);
            if (!state.tasksByList[listId]) {
                state.tasksByList[listId] = [];
            }
            state.tasksByList[listId].push(id);
        },
        deleteTask(
            state,
            action: PayloadAction<{ id: string; listId: string }>
        ) {
            const { id, listId } = action.payload;
            delete state.tasks[id];
            state.allIds = state.allIds.filter((taskId) => taskId !== id);
            if (state.tasksByList[listId]) {
                state.tasksByList[listId] = state.tasksByList[listId].filter(
                    (taskId) => taskId !== id
                );
            }
        },
        updateTaskTitle(
            state,
            action: PayloadAction<{ taskId: string; newTitle: string }>
        ) {
            const { taskId, newTitle } = action.payload;
            if (state.tasks[taskId]) {
                state.tasks[taskId].title = newTitle;
            }
        },
        updateTaskDescription(
            state,
            action: PayloadAction<{ taskId: string; newDescription: string }>
        ) {
            const { taskId, newDescription } = action.payload;
            if (state.tasks[taskId]) {
                state.tasks[taskId].description = newDescription;
            }
        },
        moveTask(
            state,
            action: PayloadAction<{
                sourceListId: string;
                destListId: string;
                sourceIndex: number;
                destIndex: number;
                taskId: string;
            }>
        ) {
            const { sourceListId, destListId, sourceIndex, destIndex, taskId } =
                action.payload;

            if (state.tasksByList[sourceListId]) {
                state.tasksByList[sourceListId].splice(sourceIndex, 1);
            }
            if (!state.tasksByList[destListId]) {
                state.tasksByList[destListId] = [];
            }
            state.tasksByList[destListId].splice(destIndex, 0, taskId);
            if (state.tasks[taskId]) {
                state.tasks[taskId].listId = destListId;
            }
        }
    }
});

export const {
    addTask,
    deleteTask,
    updateTaskTitle,
    updateTaskDescription,
    moveTask
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
