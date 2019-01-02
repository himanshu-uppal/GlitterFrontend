import { Component, OnInit } from '@angular/core';
import {IUser,ITweet} from '../core'
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService,TweetService} from '../core'
@Component({
  selector: 'app-tweet-create',
  templateUrl: './tweet-create.component.html'
})
export class TweetCreateComponent implements OnInit {
  message
 
  currentUserKey:string 
 

  constructor(private router:Router,private route:ActivatedRoute,private authenticationService:AuthenticationService,
    private tweetService:TweetService
    ) {
    this.authenticationService.getCurrentUser().subscribe(data=>{
      this.currentUserKey = data.Key
  })
   }

  ngOnInit() {
   

  
  }

  saveTweet(formValues){
    this.tweetService.saveTweet(formValues).subscribe(
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
