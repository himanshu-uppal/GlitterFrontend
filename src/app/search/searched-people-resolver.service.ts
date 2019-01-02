import {Injectable} from '@angular/core'
 import {Resolve} from '@angular/router'
 import { SearchService } from '../core';
 import {map} from 'rxjs/operators'
 import {ActivatedRouteSnapshot} from '@angular/router'
 
   @Injectable()
 export class SearchedPeopleResolver implements Resolve<any>{
     constructor(private searchService:SearchService ){
      }
     resolve(route:ActivatedRouteSnapshot){
         console.log('resolving data')
         
         return this.searchService.searchTextInPeople(route.params['text']).pipe(map(searchedPeople =>searchedPeople))
 
       }
  }