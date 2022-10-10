import { Component, OnInit } from '@angular/core';
import  {Subscription} from 'rxjs';
import { UiServiceService } from 'src/app/services/ui-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  title:string = 'Task Tracker';
  showAddTask:boolean = true;
  subscription!:Subscription;


  constructor(
    private uiService:UiServiceService,private route:Router
  ) { 
    this.subscription = this.uiService.onToggle().subscribe((v)=>{
      this.showAddTask = v
    })
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
  this.uiService.toggleAddTask();
    
  }
  hasRouter(router:string){

return this.route.url === router;
  }


}
