import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskCard } from "../task card/taskCard";
import { Task } from "../Task";
@Component({
    selector: 'task-list',
    standalone: true,
    templateUrl: './taskList.html',
    styleUrl: './taskList.css',
    imports: [TaskCard]

}) 
export class TaskList{
    @Input() tasks: Task[] = [];
    @Output() tasksUpdated = new EventEmitter<Task>();
    @Output() tasksDeleted = new EventEmitter<Task>();

    onTaskUpdated(task: Task){
        const index = this.tasks.findIndex(t => t.id === task.id);
        if(index !== -1){
            this.tasks[index] = task;
            this.tasksUpdated.emit({...task});
        }
        
    }
    onTaskDeleted(task: Task){
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        this.tasksDeleted.emit({...task});
    }

    
    
}