import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '../types';

const activitySlice = createSlice({
    name: 'activity',
    initialState: [] as Activity[],
    reducers: {
        logActivity(state, action: PayloadAction<string>) {
            state.unshift({
                id: Date.now().toString(),
                message: action.payload,
                timestamp: new Date().toISOString()
            });
        }
    }
});

export const { logActivity } = activitySlice.actions;
export const activityReducer = activitySlice.reducer;
