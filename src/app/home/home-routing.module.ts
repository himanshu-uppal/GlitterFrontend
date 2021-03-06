import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './home.component';
import {HomeTweetsResolver} from './home-tweets-resolver.service'
import { HomeReactionTypesResolver } from './home-reaction-types-resolver.service';
 
const routes:Routes = [  
    {path:'',component:HomeComponent,resolve:{tweets:HomeTweetsResolver,
                                                reactionTypes:HomeReactionTypesResolver}}
 ]
 
  @NgModule({
   imports: [
     CommonModule,
     RouterModule.forChild(routes)
   ],
   declarations: [],
   exports:[RouterModule]
 })
 export class HomeRoutingModule { }