import {Injectable} from '@angular/core'
 import {Resolve} from '@angular/router'
 import { TweetService } from '../core';
 import {map} from 'rxjs/operators'
 
   @Injectable()
 export class HomeTweetsResolver implements Resolve<any>{
     constructor(private tweetService:TweetService){
      }
     resolve(){
         console.log('resolving data')
         return this.tweetService.getFeed().pipe(map(tweets =>tweets))
 
       }
  }