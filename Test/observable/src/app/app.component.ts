import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable';
  data="lol";
  show=false;
  myObservable=new Observable(
    (observer)=>{
    console.log('observable starts')
    setTimeout(()=>{observer.next("1")},1000)
    setTimeout(()=>{observer.next("2")},2000)
    setTimeout(()=>{observer.next("3")},3000)
    setTimeout(()=>{observer.next("4")},4000)
    setTimeout(()=>{observer.next("5")},5000)


  // observer.next("1")
  // observer.next("2")
  // observer.next("3")
  // observer.next("4")
  // observer.next("5")
  })
  ;
  ngOnInit(){
    this.myObservable.subscribe(
(vol)=>{console.log(vol);}

    )
  };
}
