import { Component } from '@angular/core';
import { Task } from '../Task';
import { AllTasks } from '../all-tasks/all-tasks';
import { CompletedTasks } from '../completed-tasks/completed-tasks';
import { PendingTasks } from '../pending-tasks/pending-tasks';
import { TaskInput } from "../task input/taskInput";
@Component({
  selector: 'app-task-view',
  imports: [AllTasks, CompletedTasks, PendingTasks, TaskInput],
  templateUrl: './task-view.html',
  styleUrl: './task-view.css',
})
export class TaskView {
  tasks: Task[] = [];
  currentTab: 'all' | 'pending' | 'completed' = 'all';
  onTaskAdded(task: Task) {
    // task.id = uuidv4().split('-')[0];
    this.tasks = [...this.tasks, task];
    console.log(this.tasks);
  }
  onTasksUpdate($event: Task){
    const index = this.tasks.findIndex(t => t.id === $event.id);
    if(index !== -1){
      this.tasks = this.tasks.map((task, i) => i === index ? $event : task);
    }
  }
  onTasksDelete($event: Task){
    this.tasks = this.tasks.filter(t => t.id !== $event.id);
  }
  setTab(tab: 'all' | 'pending' | 'completed') {
    this.currentTab = tab;
  }
}


