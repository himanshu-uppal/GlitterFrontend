import { Component, OnInit } from '@angular/core';
import {IUser,ITweet} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,TweetService} from '../core'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-tweet-update',
  templateUrl: './tweet-update.component.html'
})
export class TweetUpdateComponent implements OnInit {
 tweet:any
  currentUserKey:string 
  updateTweetForm:FormControl
 

  constructor(private router:Router,private route:ActivatedRoute,private authenticationService:AuthenticationService,
    private tweetService:TweetService
    ) {
    this.authenticationService.getCurrentUser().subscribe(data=>{
      this.currentUserKey = data.Key
  })
   }

  ngOnInit() {
    this.tweet = this.route.snapshot.data['tweet']  
  }

  updateTweet(){
               
    this.tweetService.updateTweet(this.tweet,this.tweet.Key).subscribe(
        data=>{
            console.log(data)
            this.router.navigate([''])
        },
        error =>{
            console.log(error)
        }
    )

}

 



}
