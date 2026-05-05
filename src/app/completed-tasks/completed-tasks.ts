import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Task } from '../Task';import { TaskList } from '../task list/taskList';

@Component({
  selector: 'app-completed-tasks',
  imports: [TaskList],
  templateUrl: './completed-tasks.html',
  styleUrl: './completed-tasks.css',
})
export class CompletedTasks {
  filteredTasks: Task[] = [];
  @Input() tasks: Task[] = [];
  @Output() tasksUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();
  onTasksUpdated(updatedTasks: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTasks.id);
     if(index !== -1){
      this.tasks[index] = updatedTasks;
    }
    // this.tasks = updatedTasks;
    this.tasksUpdated.emit({...updatedTasks});
  }
  onTaskDeleted(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.taskDeleted.emit({...task});
  }
  ngOnChanges(changes: SimpleChanges) {
    
    if(changes['tasks']) {
      this.filteredTasks = this.tasks.filter(task => task.status === 'completed');
    }
  }
  get completedTasks() {
    return this.filteredTasks;
  }
}
