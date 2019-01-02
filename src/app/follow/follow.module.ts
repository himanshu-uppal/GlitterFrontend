import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
 
import {FollowComponent} from './follow.component'
import {FollowersComponent} from './followers.component'
import {FolloweesComponent} from './followees.component'
import {FollowRoutingModule} from './follow-routing.module'
import {FollowersResolver} from './followers-resolver.service'
import {FolloweesResolver} from './followees-resolver.service'
import { FollowService } from '../core';
 
  @NgModule({
     declarations:[FollowComponent,FollowersComponent,FolloweesComponent],
     imports:[FollowRoutingModule,CommonModule],
     providers:[FollowersResolver,FolloweesResolver,FollowService]
 })
 export class FollowModule{
 
  }