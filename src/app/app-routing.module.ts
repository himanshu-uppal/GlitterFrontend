import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router'
 
  const routes:Routes = [ 
    {
      path: '',
      loadChildren: './home/home.module#HomeModule' 

    },
    {
      path: 'follow',
      loadChildren: './follow/follow.module#FollowModule' 

    },
    {
      path: 'search',
      loadChildren: './search/search.module#SearchModule' 

    },
    {
      path: 'tweets',
      loadChildren: './tweet/tweet.module#TweetModule' 

    }
   

 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
