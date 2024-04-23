import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from "./post.model";
import { map, Subject ,catchError, throwError, tap} from "rxjs";
@Injectable({providedIn:'root'})
export class PostsService{
    constructor(private http: HttpClient) {};
error=new Subject<string>();

createAndStorePost(title:string,content:string){
    const postData:Post={title:title,content:content }
    this.http.post('https://http-01-practice-default-rtdb.firebaseio.com/posts.json',postData,
    //  {

    //   oberve:'response'
    // }
    ).subscribe(
        responseData=>{
          // console.log(responseData);
        },error=>{
          this.error.next(error.message);
        }
      )
      ;
  

}
fetchPost(){
  let searchParams=new HttpParams();
  searchParams.append('print','pretty')
  searchParams.append('custom','key')
    return this.http.get<{[key:string]:Post}>('https://http-01-practice-default-rtdb.firebaseio.com/posts.json',
      {headers:new HttpHeaders({'Cusotm-Header':'Hello'}),
      // params: new HttpParams().set('print','pretty')
      params: searchParams
      }
    )
    .pipe(
      map((responseData:
      any
      // {[key:string]:Post}
    )=>{
      // const postsArray:Post[]=[];
      const postsArray=[];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key))
          {
            postsArray.push({...responseData[key],id:key})
          }
        
      }
return postsArray;
    })
  ,catchError(errorRes=>{

   return throwError(errorRes);
  })
  )
//     .subscribe(
// posts=>{}
//     // posts=>{
//     //   // console.log(posts)

//     //   this.loadedPosts=posts;
//     // }
//     )

}

OnClearPost(){

  return this.http.delete('https://http-01-practice-default-rtdb.firebaseio.com/posts.json',

  {
    observe:'events',
    responseType:'json'
  }
  ).pipe(tap(event=>{
console.log(event);
if (event.type===HttpEventType.Response){
  console.log(event.body)
}

  }))
  
  // .subscribe(
  //       // responseData=>{
  //       //   // console.log(responseData);
  //       // }
  //     )
}

}