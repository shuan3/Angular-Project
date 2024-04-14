
import { RecordsService } from '../records.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
  providers:[RecordsService]
})
export class EmpListComponent implements OnInit {
 inforeceive1:string[]=[];
 inforeceive2:string[]=[];
 inforeceive3:string[]=[];
 getInfoFromServiceClass1(){this.inforeceive1=this.rservice.getinfo1()}
 getInfoFromServiceClass2(){this.inforeceive2=this.rservice.getinfo2()}
 getInfoFromServiceClass3(){this.inforeceive3=this.rservice.getinfo3()}
  constructor(private rservice:RecordsService){}
  //caeed first time before oninit()
  ngOnInit():void{}
//called after constructor
}
//https://jhapriti09.medium.com/what-is-the-difference-between-constructor-and-ngoninit-839748fc59ce#:~:text=The%20constructor()%20should%20only,as%20the%20class%20is%20instantiated.
//explain dif between constructor and Oninit.