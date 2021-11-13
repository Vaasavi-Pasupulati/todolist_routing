import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkserviceService {

  public task=[
    {"Name":"Create a new Angular App Called Todo","Commands":"ng new Todo-app","Deadline":"2 hours"},
    {"Name":"Serve that app","Commands":"ng serve","Deadline":"1 hours"},
    {"Name":"Create a component called todo","Commands":"ng g c todo","Deadline":"1 hours"},
    {"Name":"Within the todo create todo-header, todo-list, todo-input, todo-footer","Commands":"ng new Todo-app/cname","Deadline":"5 hours"},
    {"Name":"Add angular services","Commands":"many","Deadline":"10 hours"}
  ]
  gettask() { return this.task}
  
  constructor() { }
}