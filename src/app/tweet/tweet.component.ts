import { Component, OnInit } from '@angular/core';
import {IUser,ITweet} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,FollowService} from '../core'
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html'
})
export class TweetComponent implements OnInit {
 
  currentUserKey:string 
 

  constructor(private router:Router,private route:ActivatedRoute,private authenticationService:AuthenticationService
    ) {
    this.authenticationService.getCurrentUser().subscribe(data=>{
      this.currentUserKey = data.Key
  })
   }

  ngOnInit() {
   

  
  }

 



}
