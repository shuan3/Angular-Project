import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRouteComponent } from './my-route/my-route.component';
import {Routes} from '@angular/router';
import {MyRouteRoutingModule} from './my-route-routing.module'

const routes:Routes=[{path:'route',component:MyRouteComponent}];
@NgModule({
  declarations: [
    MyRouteComponent
  ],
  imports: [
    CommonModule,
    MyRouteRoutingModule
  ]
})
export class MyRouteModule { }
