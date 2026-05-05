export interface Task{
    id: string,
    title: string,
    description: string,
    dueDate: string,
    priority: "low"|"medium"|"high",
    category: "work"|"study"|"personal"
    status: "pending"|"in-progress"|"completed"
}