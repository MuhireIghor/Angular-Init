import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs'
import { TASKS } from 'src/app/mock-task';
import { Task } from '../task';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl :string= "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
   return this.http.get<Task[]>(this.apiUrl); 
  }
}
