import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError} from 'rxjs';
import { User } from './user.model';
// require('dotenv').config()
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// __dirname = path.resolve(path.dirname(''));

// const path=require('path')
// const dotenv=require('dotenv');
// const TESTENV=path.resolve(__dirname ,'testenv');
// const fs=require('fs')
// if (fs.existsSynv(TESTENV)){
// const envConfig=dotenv.parse(fs.readFileSync(TESTENV));
// Object.keys(envConfig).forEach(
//   (k)=>{
//     process.env[k]=envConfig[k]
//   }
// )
// }
// require('dotenv').config({path: __dirname + '/.env'})
import {environment} from '../../environment/environment';
import { Router } from '@angular/router';

export interface AuthResponseData{
    kind:string,
    idtoken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localld:string
//optional value
registered?:boolean,
}


@Injectable({providedIn:'root'})
export class AuthService{
user=new BehaviorSubject<User>(null);
// token:string =null;




    constructor(private http:HttpClient, private router:Router){}


 

signup(email:string,password:string){
return this.http.post<AuthResponseData>(environment.SIGNUP_URL
  // process.env['SIGNUP_URL']

  ,
{email:email,
    password:password,
    returnSecureToken:true
}
).pipe(  catchError(this.handleError),
tap(resData => {
  this.handleAuthentication(
    resData.email,
    resData.localld,
    resData.idtoken,
    +resData.expiresIn
  );
})
);
}

login(email:string,password:string)
{
return this.http.post<AuthResponseData>(environment.LOGIN_URL
  // process.env['LOGIN_URL']

  
  ,
{email:email,
    password:password,
    returnSecureToken:true
}

).pipe(  catchError(this.handleError),
tap(resData => {
  this.handleAuthentication(
    resData.email,
    resData.localld,
    resData.idtoken,
    +resData.expiresIn
  );
})
);
}


logout(){
  this.user.next(null);
  this.router.navigate(['/auth']);

}


private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }


private handleError(errorRes:HttpErrorResponse){

    let errorMessage="An unknown error occured!"
    if (!errorRes.error || !errorRes.error.error){
        return throwError(errorRes);
    }
    else{
    switch(errorRes.error.error.message){
    case 'EMAIL_EXISTS':errorMessage='EMAIL EXIST';
    break;
    case 'EMAIL_NOT_FOUND':errorMessage='This email is not exist.';
    break;     
    case 'INVALID_PASSWORD':errorMessage='This password is not correct.';
    break;    
  }  return throwError(errorMessage)}
}







}


// Ref Doc: https://firebase.google.com/docs/reference/rest/auth
//https://loading.io/css/