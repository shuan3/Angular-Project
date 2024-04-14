import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'okta-sample-app';

  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService) { 
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit(){
    // get authentication state for immediate use
     this.isAuthenticated = await this.oktaAuth.isAuthenticated();
 }

  logout() {
    this.oktaAuth.logout('/login');
  }
}