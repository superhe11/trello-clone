import { configureStore } from '@reduxjs/toolkit';
import { boardsReducer } from './boardsSlice';
import { activityReducer } from './activitySlice';

export const store = configureStore({
    reducer: {
        boards: boardsReducer,
        activity: activityReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
