import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import {Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../dashboard/default/default.component';
import { AuthGuard} from '../guard/auth.guard';
const route:Routes=[
  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
      {path:'',component:DefaultComponent}
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(route)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
