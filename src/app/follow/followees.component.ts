import { Component, OnInit } from '@angular/core';
import {IFolloweesResponse, IFollowersResponse,IUser} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,FollowService} from '../core'
@Component({
  selector: 'app-followees',
  templateUrl: './followees.component.html'
})
export class FolloweesComponent implements OnInit {
 
  currentUserKey:string 
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
        this.followees =currentData['followees'].Followees       
        console.log(this.followees)
      });
  
  }

  unfollowUser(userKey:string){
    this.followService.unfollowUser(userKey).subscribe(data=>{
        this.router.navigate([''])
    })


  }

 



}
