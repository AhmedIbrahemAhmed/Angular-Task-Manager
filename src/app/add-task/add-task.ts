import { Component, inject } from '@angular/core';
import { TaskInput } from "../task input/taskInput";
import { Task } from '../Task';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-add-task',
  imports: [TaskInput],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  private taskService = inject(TaskService);
  onTaskAdded(task: Task) {
    this.taskService.addTask(task).subscribe({
      next: (newTask) => {
        this.taskService.tasks.push(newTask);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
