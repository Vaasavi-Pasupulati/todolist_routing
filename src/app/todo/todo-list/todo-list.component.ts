import { Component, OnInit } from '@angular/core';
import { MakingService } from 'src/app/making.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


    public list: any = []

  constructor(private tskinfo:MakingService) { }

  ngOnInit(): void {
    this.list=this.tskinfo.gettask()
  }


}