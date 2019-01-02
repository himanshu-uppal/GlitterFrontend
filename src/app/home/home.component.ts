import { Component, OnInit } from '@angular/core';
import {ITweet, IReaction} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,TweetService,ReactionService} from '../core'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets:Array<ITweet>
  reactionTypes:Array<IReaction>
  currentUserKey:string

  constructor(private router:Router,private route:ActivatedRoute,private authenticationService:AuthenticationService,
    private tweetService:TweetService,private reactionService:ReactionService) {
    this.authenticationService.getCurrentUser().subscribe(data=>{
      this.currentUserKey = data.Key
  })
   }

  ngOnInit() {
    console.log('home page initialized')

     this.route.data.subscribe((currentData) => {
      this.tweets =currentData['tweets'].Tweets
      this.reactionTypes =currentData['reactionTypes'].ReactionTypes
      console.log(this.tweets)
    });
  }

  editTweet(key:string){
    
  }
  deleteTweet(key:string){
    this.tweetService.deleteTweet(key).subscribe(data=>{
      this.router.navigate([''])
  })
    
  }
  addReaction(tweetKey:string,reactionKey:string){
    this.tweetService.addReaction(tweetKey,reactionKey).subscribe(data=>{
      this.router.navigate([''])
  })
  }



}
