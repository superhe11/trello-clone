import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types';

interface BoardsState {
    boards: { [id: string]: Board };
    allIds: string[];
    selectedBoardId: string | null;
}

const initialState: BoardsState = {
    boards: {},
    allIds: [],
    selectedBoardId: null
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<{ id: string; title: string }>) {
            const { id, title } = action.payload;
            state.boards[id] = { id, title };
            state.allIds.push(id);
        },
        selectBoard(state, action: PayloadAction<string>) {
            state.selectedBoardId = action.payload;
        },
        deleteBoard(state, action: PayloadAction<string>) {
            const id = action.payload;
            delete state.boards[id];
            state.allIds = state.allIds.filter((boardId) => boardId !== id);
            if (state.selectedBoardId === id) {
                state.selectedBoardId = null;
            }
        },
        updateBoardTitle(
            state,
            action: PayloadAction<{ boardId: string; newTitle: string }>
        ) {
            const { boardId, newTitle } = action.payload;
            if (state.boards[boardId]) {
                state.boards[boardId].title = newTitle;
            }
        }
    }
});

export const { addBoard, selectBoard, deleteBoard, updateBoardTitle } =
    boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
