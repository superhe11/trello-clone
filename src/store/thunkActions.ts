import { AppDispatch } from './index';
import {
    addBoard,
    addList,
    addTask,
    deleteBoard,
    deleteList,
    deleteTask,
    updateBoardTitle,
    updateListTitle,
    updateTaskTitle,
    updateTaskDescription
} from './boardsSlice';
import { logActivity } from './activitySlice';

export const addBoardWithActivity =
    (title: string) => (dispatch: AppDispatch) => {
        dispatch(addBoard(title));
        dispatch(logActivity(`Added board "${title}"`));
    };

export const deleteBoardWithActivity =
    (boardId: string, boardTitle: string) => (dispatch: AppDispatch) => {
        dispatch(deleteBoard(boardId));
        dispatch(logActivity(`Deleted board "${boardTitle}"`));
    };

export const addListWithActivity =
    (boardId: string, title: string) => (dispatch: AppDispatch) => {
        dispatch(addList({ boardId, title }));
        dispatch(logActivity(`Added list "${title}"`));
    };

export const deleteListWithActivity =
    (boardId: string, listId: string, listTitle: string) =>
    (dispatch: AppDispatch) => {
        dispatch(deleteList({ boardId, listId }));
        dispatch(logActivity(`Deleted list "${listTitle}"`));
    };

export const addTaskWithActivity =
    (listId: string, title: string) => (dispatch: AppDispatch) => {
        dispatch(addTask({ listId, title }));
        dispatch(logActivity(`Added task "${title}"`));
    };

export const deleteTaskWithActivity =
    (listId: string, taskId: string, taskTitle: string) =>
    (dispatch: AppDispatch) => {
        dispatch(deleteTask({ listId, taskId }));
        dispatch(logActivity(`Deleted task "${taskTitle}"`));
    };

export const updateBoardTitleWithActivity =
    (boardId: string, newTitle: string) => (dispatch: AppDispatch) => {
        dispatch(updateBoardTitle({ boardId, newTitle }));
        dispatch(logActivity(`Board renamed in "${newTitle}"`));
    };

export const updateListTitleWithActivity =
    (boardId: string, listId: string, newTitle: string) =>
    (dispatch: AppDispatch) => {
        dispatch(updateListTitle({ boardId, listId, newTitle }));
        dispatch(logActivity(`List renamed in "${newTitle}"`));
    };

export const updateTaskTitleWithActivity =
    (listId: string, taskId: string, newTitle: string) =>
    (dispatch: AppDispatch) => {
        dispatch(updateTaskTitle({ listId, taskId, newTitle }));
        dispatch(logActivity(`Task renamed in "${newTitle}"`));
    };

export const updateTaskDescriptionWithActivity =
    (taskId: string, newDescription: string) => (dispatch: AppDispatch) => {
        dispatch(updateTaskDescription({ taskId, newDescription }));
        dispatch(logActivity(`Task description updated`));
    };
