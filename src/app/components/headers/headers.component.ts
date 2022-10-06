import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  title:string = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log('toggled');
    
  }

}
