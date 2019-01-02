import {Component, OnInit} from '@angular/core'
import {AuthenticationService, FollowService} from '../../core'
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'

})
export class HeaderComponent implements OnInit{
    isAuthenticated:boolean
    currentUserKey:string
    followersCount:number
    followeesCount:number
    search
    constructor(private authenticationService:AuthenticationService,private router:Router,private followService:FollowService){}

    ngOnInit(){
       this.authenticationService.isUserAuthenticated.subscribe(data=>
            {
                this.isAuthenticated = data

            })
            this.authenticationService.getCurrentUser().subscribe(data=>{
               this.currentUserKey = data.Key
           })
           this.getUserFollowerCount()
           this.getUserFolloweeCount()
    }
    logout(){
        this.authenticationService.logoutUser()
        console.log('user logged out')
        this.router.navigate([''])
    }

    isUserLoggedIn(){
        if(this.authenticationService.getCurrentUserToken()){
            return true
        }
        return false
        
    }

    getUserFollowerCount(){
      this.followService.getUserFollowers().subscribe(data=>{
         this.followersCount = data.FollowersCount
     })


    }
    getUserFolloweeCount(){
      this.followService.getUserFollowees().subscribe(data=>{
         this.followeesCount = data.FolloweesCount
     })
       
   }
   searchInPeopleAndTweets(formValues){    
         
          this.router.navigate(['/search', formValues.search])  //can navigate to previous url
       //   console.log(this.router.navigate(['/search', 'hello']))

      
      
  }

   


    
}