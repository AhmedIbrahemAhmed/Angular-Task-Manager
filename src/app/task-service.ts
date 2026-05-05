import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/tasks';
  tasks:Task[] = [] ;

  getAllTasks(){
    return this.http.get<Task[]>(this.API_URL);
  }

  getPendingTasks(){
    return this.tasks.filter(t => t.status === 'pending');
  }

  getCompletedTasks(){
    return this.tasks.filter(t => t.status === 'completed');
  }

  addTask(task:Task){
    return this.http.post<Task>(`${this.API_URL}`, task);
  }

  updateTask(task:Task){
    return this.http.put<Task>(`${this.API_URL}/${task.id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  loadTasks() {
    this.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
