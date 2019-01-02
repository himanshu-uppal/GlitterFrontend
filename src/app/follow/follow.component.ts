import { Component, OnInit } from '@angular/core';
import {IFolloweesResponse, IFollowersResponse} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,FollowService} from '../core'
@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html'
})
export class FollowComponent implements OnInit {
 
  currentUserKey:string 
  //type:string //can be followers/followees

  constructor(private router:Router,private route:ActivatedRoute,private authenticationService:AuthenticationService
    ) {
    this.authenticationService.getCurrentUser().subscribe(data=>{
      this.currentUserKey = data.Key
  })
   }

  ngOnInit() {
  
  }

 



}
