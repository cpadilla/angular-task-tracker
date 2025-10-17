import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task as TaskType } from '../Task';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Task {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) {}


  getTasks(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.apiUrl);
  }
}
