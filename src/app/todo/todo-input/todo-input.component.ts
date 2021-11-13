import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor() { }


  ngOnInit(){
  }
  Task=''
  list:any[]=[];
  addTask(item: string)
  {
    this.list.push({id:this.list.length,name:item});
    console.log(this.list);
  }

}