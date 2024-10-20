import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types';
interface BoardsState {
    boards: Board[];
    selectedBoardId: string | null;
}

const initialState: BoardsState = {
    boards: [],
    selectedBoardId: null
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<string>) {
            const newBoard: Board = {
                id: Date.now().toString(),
                title: action.payload,
                lists: []
            };
            state.boards.push(newBoard);
        },
        selectBoard(state, action: PayloadAction<string>) {
            state.selectedBoardId = action.payload;
        },
        addList(
            state,
            action: PayloadAction<{ boardId: string; title: string }>
        ) {
            const { boardId, title } = action.payload;
            const board = state.boards.find((b) => b.id === boardId);
            if (board) {
                board.lists.push({
                    id: Date.now().toString(),
                    title,
                    tasks: []
                });
            }
        },
        addTask(
            state,
            action: PayloadAction<{ listId: string; title: string }>
        ) {
            const { listId, title } = action.payload;
            for (const board of state.boards) {
                const list = board.lists.find((l) => l.id === listId);
                if (list) {
                    list.tasks.push({
                        id: Date.now().toString(),
                        title,
                        description: '',
                        listId
                    });
                    break;
                }
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
            const { sourceListId, destListId, sourceIndex, destIndex } =
                action.payload;

            for (const board of state.boards) {
                const sourceList = board.lists.find(
                    (l) => l.id === sourceListId
                );
                const destList = board.lists.find((l) => l.id === destListId);

                if (sourceList && destList) {
                    const [movedTask] = sourceList.tasks.splice(sourceIndex, 1);
                    movedTask.listId = destListId;
                    destList.tasks.splice(destIndex, 0, movedTask);
                    break;
                }
            }
        },
        deleteBoard(state, action: PayloadAction<string>) {
            const boardId = action.payload;
            state.boards = state.boards.filter((b) => b.id !== boardId);
            if (state.selectedBoardId === boardId) {
                state.selectedBoardId = null;
            }
        },
        deleteList(
            state,
            action: PayloadAction<{ boardId: string; listId: string }>
        ) {
            const { boardId, listId } = action.payload;
            const board = state.boards.find((b) => b.id === boardId);
            if (board) {
                board.lists = board.lists.filter((l) => l.id !== listId);
            }
        },
        deleteTask(
            state,
            action: PayloadAction<{ listId: string; taskId: string }>
        ) {
            const { listId, taskId } = action.payload;
            for (const board of state.boards) {
                const list = board.lists.find((l) => l.id === listId);
                if (list) {
                    list.tasks = list.tasks.filter((t) => t.id !== taskId);
                    break;
                }
            }
        },
        updateBoardTitle(
            state,
            action: PayloadAction<{ boardId: string; newTitle: string }>
        ) {
            const { boardId, newTitle } = action.payload;
            const board = state.boards.find((b) => b.id === boardId);
            if (board) {
                board.title = newTitle;
            }
        },
        updateListTitle(
            state,
            action: PayloadAction<{
                boardId: string;
                listId: string;
                newTitle: string;
            }>
        ) {
            const { boardId, listId, newTitle } = action.payload;
            const board = state.boards.find((b) => b.id === boardId);
            if (board) {
                const list = board.lists.find((l) => l.id === listId);
                if (list) {
                    list.title = newTitle;
                }
            }
        },
        updateTaskTitle(
            state,
            action: PayloadAction<{
                listId: string;
                taskId: string;
                newTitle: string;
            }>
        ) {
            const { listId, taskId, newTitle } = action.payload;
            for (const board of state.boards) {
                const list = board.lists.find((l) => l.id === listId);
                if (list) {
                    const task = list.tasks.find((t) => t.id === taskId);
                    if (task) {
                        task.title = newTitle;
                        break;
                    }
                }
            }
        },
        updateTaskDescription(
            state,
            action: PayloadAction<{ taskId: string; newDescription: string }>
        ) {
            const { taskId, newDescription } = action.payload;
            for (const board of state.boards) {
                for (const list of board.lists) {
                    const task = list.tasks.find((t) => t.id === taskId);
                    if (task) {
                        task.description = newDescription;
                        break;
                    }
                }
            }
        }
    }
});

export const {
    addBoard,
    selectBoard,
    addList,
    addTask,
    moveTask,
    deleteBoard,
    deleteList,
    deleteTask,
    updateBoardTitle,
    updateListTitle,
    updateTaskTitle,
    updateTaskDescription
} = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
