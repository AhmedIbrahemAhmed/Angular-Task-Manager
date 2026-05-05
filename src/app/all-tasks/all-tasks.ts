import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task';
import { TaskList } from '../task list/taskList';
@Component({
  selector: 'app-all-tasks',
  imports: [TaskList],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {
  @Input() tasks: Task[] = [];
  @Output() tasksUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();
  onTasksUpdated(updatedTasks: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTasks.id);
     if(index !== -1){
      this.tasks[index] = updatedTasks;
      this.tasksUpdated.emit({...updatedTasks});
    }
    
  }
  onTaskDeleted(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.taskDeleted.emit({...task});
  }
}
