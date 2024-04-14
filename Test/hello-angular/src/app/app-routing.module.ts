import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRouteComponent } from './my-route/my-route/my-route.component';

const routes: Routes = [
  {
    path: '',
    component: MyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
