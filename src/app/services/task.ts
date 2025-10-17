import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task as TaskType } from '../Task';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class Task {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) {}


  getTasks(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.apiUrl);
  }

  deleteTask(task: TaskType): Observable<TaskType> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskType>(url);
  }

  updateTaskReminder(task: TaskType): Observable<TaskType> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskType>(url, task, httpOptions);
  }
}
