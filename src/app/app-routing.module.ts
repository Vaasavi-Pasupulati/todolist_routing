import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  {path:'details', component:TodoDetailsComponent},
  {path:'list', component:TodoListComponent},
  {path:'spacex', component:SpaceXComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }