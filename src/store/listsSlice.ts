import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { List } from '../types';

interface ListsState {
    lists: { [id: string]: List };
    allIds: string[];
    listsByBoard: { [boardId: string]: string[] };
}

const initialState: ListsState = {
    lists: {},
    allIds: [],
    listsByBoard: {}
};

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList(
            state,
            action: PayloadAction<{
                id: string;
                boardId: string;
                title: string;
            }>
        ) {
            const { id, boardId, title } = action.payload;
            state.lists[id] = { id, boardId, title };
            state.allIds.push(id);
            if (!state.listsByBoard[boardId]) {
                state.listsByBoard[boardId] = [];
            }
            state.listsByBoard[boardId].push(id);
        },
        deleteList(
            state,
            action: PayloadAction<{ id: string; boardId: string }>
        ) {
            const { id, boardId } = action.payload;
            delete state.lists[id];
            state.allIds = state.allIds.filter((listId) => listId !== id);
            if (state.listsByBoard[boardId]) {
                state.listsByBoard[boardId] = state.listsByBoard[
                    boardId
                ].filter((listId) => listId !== id);
            }
        },
        updateListTitle(
            state,
            action: PayloadAction<{ listId: string; newTitle: string }>
        ) {
            const { listId, newTitle } = action.payload;
            if (state.lists[listId]) {
                state.lists[listId].title = newTitle;
            }
        }
    }
});

export const { addList, deleteList, updateListTitle } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
