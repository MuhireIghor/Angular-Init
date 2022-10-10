import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import  {Subscription} from 'rxjs';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!:string;
  day!:string;
  reminder:boolean=false;
  showAddTask:boolean = false;
  subscription!:Subscription;

  
  @Output() onPostTask:EventEmitter<Task> = new EventEmitter();

  constructor( private uiService:UiServiceService) { 
    this.subscription = this.uiService.onToggle().subscribe((v)=>{
      this.showAddTask = v
    })
  }
  
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
