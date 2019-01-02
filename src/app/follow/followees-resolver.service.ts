import {Injectable} from '@angular/core'
 import {Resolve} from '@angular/router'
 import { FollowService } from '../core';
 import {map} from 'rxjs/operators'
 
   @Injectable()
 export class FolloweesResolver implements Resolve<any>{
     constructor(private followService:FollowService){
      }
     resolve(){
         console.log('resolving data')
         return this.followService.getUserFollowees().pipe(map(followees =>followees))
 
       }
  }