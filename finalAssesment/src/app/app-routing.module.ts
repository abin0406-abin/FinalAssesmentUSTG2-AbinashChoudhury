import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path:'home',component:HomeComponent },
  { path:'task-manager',component:TaskManagerComponent },
  { path:'user',component:UserComponent },
  { path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
