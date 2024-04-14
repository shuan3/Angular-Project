import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouteComponent } from './my-route/my-route/my-route.component';
import { MyRouteModule } from './my-route/my-route.module';

@NgModule({
  declarations: [
    AppComponent
  // ,MyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyRouteModule
  ],
  providers: [],
  //when create route, please add in imports and bootstrap
  bootstrap: [AppComponent,MyRouteComponent]
})
export class AppModule { }
