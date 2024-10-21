export interface Board {
    id: string;
    title: string;
}

export interface List {
    id: string;
    boardId: string;
    title: string;
}

export interface Task {
    id: string;
    listId: string;
    title: string;
    description: string;
}

export interface Activity {
    id: string;
    message: string;
    timestamp: string;
}
