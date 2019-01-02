import {Injectable} from '@angular/core'
 import {Resolve} from '@angular/router'
 import { ReactionService } from '../core';
 import {map} from 'rxjs/operators'
 
   @Injectable()
 export class HomeReactionTypesResolver implements Resolve<any>{
     constructor(private reactionService:ReactionService){
      }
     resolve(){
         console.log('resolving data')
         return this.reactionService.getReactionTypes().pipe(map(reactionTypes =>reactionTypes))
 
       }
  }