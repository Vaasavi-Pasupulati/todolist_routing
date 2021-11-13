import { Component, OnInit } from '@angular/core';
import { MakingService } from 'src/app/making.service';
import { WorkService } from 'src/app/work.service';
import { WorkserviceService } from 'src/app/workservice.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  public task: any = []

  constructor(private tskinfo:MakingService) { }

  ngOnInit(): void {
    this.task=this.tskinfo.gettask()
  }

}