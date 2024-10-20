export interface Task {
    id: string;
    title: string;
    description: string;
    listId: string;
}

export interface List {
    id: string;
    title: string;
    tasks: Task[];
}

export interface Board {
    id: string;
    title: string;
    lists: List[];
}

export interface Activity {
    id: string;
    message: string;
    timestamp: string;
}
