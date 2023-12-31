export interface Task {
    id?: any;
    title: string;
    description: string;
    creation_date: Date;
    finish_date: Date;
    state: string;
    user: number;
}
