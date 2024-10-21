import { AppDispatch } from './index';
import { logActivity } from './activitySlice';
import { addBoard, deleteBoard, updateBoardTitle } from './boardsSlice';
import { addList, deleteList, updateListTitle } from './listsSlice';
import {
    addTask,
    deleteTask,
    updateTaskTitle,
    updateTaskDescription,
    moveTask
} from './tasksSlice';

export const addBoardWithActivity =
    (title: string) => (dispatch: AppDispatch) => {
        const id = Date.now().toString();
        dispatch(addBoard({ id, title }));
        dispatch(logActivity(`Added board "${title}"`));
    };

export const deleteBoardWithActivity =
    (boardId: string, boardTitle: string) => (dispatch: AppDispatch) => {
        dispatch(deleteBoard(boardId));
        dispatch(logActivity(`Deleted board "${boardTitle}"`));
    };

export const updateBoardTitleWithActivity =
    (boardId: string, newTitle: string) => (dispatch: AppDispatch) => {
        dispatch(updateBoardTitle({ boardId, newTitle }));
        dispatch(logActivity(`Board renamed to "${newTitle}"`));
    };

export const addListWithActivity =
    (boardId: string, title: string) => (dispatch: AppDispatch) => {
        const id = Date.now().toString();
        dispatch(addList({ id, boardId, title }));
        dispatch(logActivity(`Added list "${title}"`));
    };

export const deleteListWithActivity =
    (boardId: string, listId: string, listTitle: string) =>
    (dispatch: AppDispatch) => {
        dispatch(deleteList({ id: listId, boardId }));
        dispatch(logActivity(`Deleted list "${listTitle}"`));
    };

export const updateListTitleWithActivity =
    (listId: string, newTitle: string) => (dispatch: AppDispatch) => {
        dispatch(updateListTitle({ listId, newTitle }));
        dispatch(logActivity(`List renamed to "${newTitle}"`));
    };

export const addTaskWithActivity =
    (listId: string, title: string) => (dispatch: AppDispatch) => {
        const id = Date.now().toString();
        dispatch(addTask({ id, listId, title }));
        dispatch(logActivity(`Added task "${title}"`));
    };

export const deleteTaskWithActivity =
    (listId: string, taskId: string, taskTitle: string) =>
    (dispatch: AppDispatch) => {
        dispatch(deleteTask({ id: taskId, listId }));
        dispatch(logActivity(`Deleted task "${taskTitle}"`));
    };

export const updateTaskTitleWithActivity =
    (taskId: string, newTitle: string) => (dispatch: AppDispatch) => {
        dispatch(updateTaskTitle({ taskId, newTitle }));
        dispatch(logActivity(`Task renamed`));
    };

export const updateTaskDescriptionWithActivity =
    (taskId: string, newDescription: string) => (dispatch: AppDispatch) => {
        dispatch(updateTaskDescription({ taskId, newDescription }));
        dispatch(logActivity(`Task description updated`));
    };

export const moveTaskWithActivity =
    (params: {
        sourceListId: string;
        destListId: string;
        sourceIndex: number;
        destIndex: number;
        taskId: string;
    }) =>
    (dispatch: AppDispatch) => {
        dispatch(moveTask(params));
        dispatch(logActivity(`Moved task`));
    };
