import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userName: string | undefined;
  emailId: string | undefined;;

  constructor(public oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    const userClaims = await this.oktaAuth.getUser();
    this.userName = userClaims.name;
    this.emailId= userClaims.email;
    console.log('user-claims', userClaims);
    console.log('access-token', this.oktaAuth.getAccessToken());
  }

}