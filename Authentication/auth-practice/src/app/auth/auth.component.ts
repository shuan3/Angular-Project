import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService,AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

constructor(private authService:AuthService){}

  isLoginMode=true;
  isLoading=false;
  error:string=null;


  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  };
  onSubmit(form:NgForm){
// console.log(NgForm)
if (!form.valid){return}
const email=form.value.email;
const password=form.value.password;
let authObs:Observable<AuthResponseData>;


this.isLoading=true;
if (this.isLoginMode){
authObs=this.authService.login(email,password)
// .subscribe(


//   resData=>{
//     console.log(resData);
//     this.isLoading=false;
//   },
//   errorMessage=>{
//     console.log(errorMessage);
//     this.error=errorMessage
//     this.isLoading=false;
//   }
// )
}else{
  authObs=this.authService.signup(email,password)
//   .subscribe(resData=>{
//   console.log(resData);
//   this.isLoading=false;
// },

// // errorRes=>{
// //   console.log(errorRes);
// // switch(errorRes.error.error.message){
// //   case 'EMAIL_EXISTS':this.error='EMAIL EXIST';
// //   // case '':this.error='an error occured';
// //   // break;

// // }
// //   this.isLoading=false;
// //   // this.error="An error occurred!";

// // }
// errorMessage=>{
//   console.log(errorMessage);
//   this.isLoading=false;
//   this.error=errorMessage;

// }


// );
}
authObs.subscribe(  resData=>{
  console.log(resData);
  this.isLoading=false;
},
errorMessage=>{
  console.log(errorMessage);
  this.error=errorMessage
  this.isLoading=false;
})
form.reset();
  }
}
