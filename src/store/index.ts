import { configureStore } from '@reduxjs/toolkit';
import { boardsReducer } from './boardsSlice';
import { listsReducer } from './listsSlice';
import { tasksReducer } from './tasksSlice';
import { activityReducer } from './activitySlice';

export const store = configureStore({
    reducer: {
        boards: boardsReducer,
        lists: listsReducer,
        tasks: tasksReducer,
        activity: activityReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
