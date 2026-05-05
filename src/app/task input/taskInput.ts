import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Task } from "../Task";
import { v4 as uuidv4 } from 'uuid';
@Component({
    selector: 'task-input',
    templateUrl: './taskInput.html',
    styleUrl: './taskInput.css',
    imports: [FormsModule]
}) 
export class TaskInput{
    
    @Output() TaskEvent = new EventEmitter<Task>();
    @Input() input: Task = {
        id: '',
        title: '',
        description: '',
        dueDate: '',
        priority: 'low',
        category: 'work',
        status: 'pending'
    }
    localInput: Task = {...this.input};
    
    addTask(){
        if(this.localInput.id === ''){
            this.localInput.id = uuidv4().split('-')[0];
            this.TaskEvent.emit({...this.localInput});
            this.resetInput();
            return;
        }
       
        this.TaskEvent.emit({...this.localInput});
    }
    resetInput(){
        this.localInput = {
            id: '',
            title: '',
            description: '',
            dueDate: '',
            priority: 'low',
            category: 'work',
            status: 'pending'
        };
    }
    ngOnChanges(changes: SimpleChanges){
        console.log('Input received:', this.input);
        if(changes['input'] ){
            this.localInput = {...changes['input'].currentValue};
        }
    }
}