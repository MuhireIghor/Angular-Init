import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!:string;
  day!:string;
  reminder:boolean=false;
  
  @Output() onPostTask:EventEmitter<Task> = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    if(!this.text)
    {
alert('Please add a task to do!');
return;
    }
    
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onPostTask.emit(newTask);
}
}
