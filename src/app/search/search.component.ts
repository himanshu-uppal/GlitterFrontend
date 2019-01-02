import { Component, OnInit } from '@angular/core';
import {IUser,ITweet} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,FollowService} from '../core'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
 
  currentUserKey:string 
  searchedPeople:Array<IUser>
  searchedTweets:Array<ITweet>
  followees:Array<IUser>
  
  //type:string //can be followers/followees

  constructor(private router:Router,private route:ActivatedRoute,private authenticationService:AuthenticationService,
    private followService:FollowService
    ) {
    this.authenticationService.getCurrentUser().subscribe(data=>{
      this.currentUserKey = data.Key
  })
   }

  ngOnInit() {
    this.route.data.subscribe((currentData) => {
        this.searchedPeople =currentData['searchedPeople'].People  
        this.searchedTweets =currentData['searchedTweets'].Tweets       
        this.followService.getUserFollowees().subscribe(data=>{
            this.followees = data.Followees
        })
     
      });

  
  }

  unfollowUser(userKey:string){
    this.followService.unfollowUser(userKey).subscribe(data=>{
        this.router.navigate([''])
    })
}

followUser(userKey:string){
    this.followService.followUser(userKey).subscribe(data=>{
        this.router.navigate([''])
    })
}

isSelf(userKey:string){
    if(this.currentUserKey == userKey)
    return true
    else
    return false

}
isFollowing(userKey:string):boolean{

    for(let followee of this.followees){
        if(followee.Key == userKey){
        return true;       
        
    }
    return false;

    }
  
       

}

 



}
