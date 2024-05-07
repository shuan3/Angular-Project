import { Component, OnDestroy, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy{
  isAuthenticated=false;
  private userSub:Subscription
  constructor(private dataStorageService: DataStorageService,
    private authService:AuthService
  ) {}
  ngOnDestroy() {
   this.userSub.unsubscribe();
  }
  ngOnInit(){
   this.userSub=this.authService.user.subscribe(
    user=>{
      this.isAuthenticated=!!user;
      console.log(!user,"!user");
      console.log(!!user,"!!user");
      }
   );

  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
