import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
 
import {HomeComponent} from './home.component'
import {HomeRoutingModule} from './home-routing.module'
import {HomeTweetsResolver} from './home-tweets-resolver.service'
import {HomeReactionTypesResolver} from './home-reaction-types-resolver.service'
import { TweetService,ReactionService } from '../core';
 
  @NgModule({
     declarations:[HomeComponent],
     imports:[HomeRoutingModule,CommonModule],
     providers:[HomeTweetsResolver,HomeReactionTypesResolver,TweetService,ReactionService]
 })
 export class HomeModule{
 
  }