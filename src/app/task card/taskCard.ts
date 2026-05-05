import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "../Task";
import { TaskInput } from "../task input/taskInput";

@Component({
    selector: 'task-card',
    templateUrl: 'taskCard.html',
    styleUrl: 'taskCard.css',
    imports: [TaskInput]
}) 
export class TaskCard{
    update: boolean = false;
    @Input() task: Task = {
        id: '',
        title: '',
        description: '',
        dueDate: '',
        priority: 'low',
        category: 'work',
        status: 'pending'
    };
    @Output() taskUpdated = new EventEmitter<Task>();
    @Output() taskDeleted = new EventEmitter<Task>();
    editTask(){
        this.update = true;
    }
    updateTask(Task: Task){
        console.log("Updated Task:", Task);
        this.task = Task;
        this.taskUpdated.emit({...this.task});
        this.update = false;
    }
    deleteTask(){
        this.taskDeleted.emit({...this.task});
    }
    markAsCompleted(){
        this.task.status = 'completed';
        this.taskUpdated.emit({...this.task});
    }
}