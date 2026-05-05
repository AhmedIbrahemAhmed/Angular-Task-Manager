import { Component, inject } from '@angular/core';
import { AllTasks } from "../all-tasks/all-tasks";
import { PendingTasks } from "../pending-tasks/pending-tasks";
import { CompletedTasks } from "../completed-tasks/completed-tasks";
import { Task } from '../Task';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-tasks',
  imports: [AllTasks, PendingTasks, CompletedTasks],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  private taskService = inject(TaskService);
  currentTab: 'all' | 'pending' | 'completed' = 'all';
  setTab(tab: 'all' | 'pending' | 'completed') {
    this.currentTab = tab;
  }

  onTasksUpdate(task: Task){
    this.taskService.updateTask(task).subscribe(updated => {
      const index = this.taskService.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.taskService.tasks[index] = updated;
      }
    });
  }

  onTasksDelete(task: Task){
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.taskService.tasks =
        this.taskService.tasks.filter(t => t.id !== task.id);
    });
  }

  ngOnInit() {
    this.taskService.loadTasks();
  }
  get tasks(){
    return this.taskService.tasks ;
  }
}
