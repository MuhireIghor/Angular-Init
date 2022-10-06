import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  title:string = 'task tracker';

  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log('toggled');
    
  }

}
