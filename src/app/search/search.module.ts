import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
 
import {SearchComponent} from './search.component'
import {SearchRoutingModule} from './search-routing.module'
import {SearchedPeopleResolver} from './searched-people-resolver.service'
import {SearchedTweetsResolver} from './searched-tweets-resolver.service'

import { SearchService } from '../core';
import { FollowService } from '../core';
 
  @NgModule({
     declarations:[SearchComponent],
imports:[SearchRoutingModule,CommonModule],
     providers:[SearchedPeopleResolver,SearchedTweetsResolver,SearchService,FollowService]
 })
 export class SearchModule{
 
  }