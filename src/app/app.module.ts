import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { MakingService } from './making.service';
import { WorkService } from './work.service';
import { WorkserviceService } from './workservice.service';
import {HttpClientModule } from '@angular/common/http';
import { SpaceXComponent } from './space-x/space-x.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoInputComponent,
    TodoFooterComponent,
    TodoDetailsComponent,
    SpaceXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MakingService, WorkService,WorkserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }