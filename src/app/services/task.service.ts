import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private API_URL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  deleteTask(taskId: number): Observable<Task> {
    const deleteUrl = `${this.API_URL}/${taskId}`;
    return this.http.delete<Task>(deleteUrl);
  }

  toggleReminder(task: Task): Observable<Task> {
    const updateUrl = `${this.API_URL}/${task.id}`;
    return this.http.put<Task>(updateUrl, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URL, task, httpOptions);
  }
}
