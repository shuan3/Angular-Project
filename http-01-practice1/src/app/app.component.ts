import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts :Post[]= [];
// isLoading=false;
isFetching=false;
error='';
  private errorSub: Subscription = new Subscription;
  constructor(private http: HttpClient,private postsService:PostsService) {}


  ngOnInit() {
    this.isFetching=true;
    this.postsService.fetchPost().subscribe((posts:any)=>{

      this.isFetching=false;
      this.loadedPosts=posts;
this.errorSub=this.postsService.error.subscribe(
errorMessage=>{
  this.error=errorMessage;
}

);
    });
  }

  onCreatePost(postData: Post
    // { title: string; content: string }
  ) {
    // Send Http request
    // console.log(postData);
    // this.http.post('https://http-01-practice-default-rtdb.firebaseio.com/posts.json',postData).subscribe(
    //   responseData=>{
    //     // console.log(responseData);
    //   }
    // )
    // ;

    this.postsService.createAndStorePost(postData.title,postData.content);

  }

  onFetchPosts() {
    // Send Http request
    // this.postsService.fetchPost();
    this.isFetching=true;
    this.postsService.fetchPost().subscribe((posts:any)=>{

      this.isFetching=false;
      this.loadedPosts=posts;

    },error=>{this.error=error.message;
console.log(error.message)

    }
  
  );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.OnClearPost()
    .subscribe(()=>{
this.loadedPosts=[];
    });
  }
  // private fetchPost(){
  //   this.isFetching=true;
  
  // }


  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }






  onHandleError(){
    this.error=""
  }
}


// https://http-01-practice-default-rtdb.firebaseio.com/