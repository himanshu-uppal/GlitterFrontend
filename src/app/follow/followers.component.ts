import { Component, OnInit } from '@angular/core';
import {IFolloweesResponse, IFollowersResponse,IUser} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,FollowService} from '../core'
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html'
})
export class FollowersComponent implements OnInit {
 
  currentUserKey:string 
  followers:Array<IUser>
  //type:string //can be followers/followees

  constructor(private router:Router,private route:ActivatedRoute,private authenticationService:AuthenticationService
    ) {
    this.authenticationService.getCurrentUser().subscribe(data=>{
      this.currentUserKey = data.Key
  })
   }

  ngOnInit() {

    this.route.data.subscribe((currentData) => {
        this.followers =currentData['followers'].Followers       
        console.log(this.followers)
      });
  
  }

 



}
