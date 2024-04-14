import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[]=["superman","1","ss"]
  info2:string[]=["superman","1","ss"]
  info3:string[]=["superman","1","ss"]

   getinfo1():string[]{return this.info1}
   getinfo2():string[]{return this.info2}
   getinfo3():string[]{return this.info3}
  constructor() { }
}
