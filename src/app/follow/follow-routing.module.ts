import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {Routes,RouterModule} from '@angular/router'
import { FollowersComponent } from './followers.component';
import { FolloweesComponent } from './followees.component';
import { FollowersResolver } from './followers-resolver.service';
import {FolloweesResolver} from './followees-resolver.service'

const routes:Routes = [  
    {path:'follower',component:FollowersComponent,resolve:{followers:FollowersResolver}},
    {path:'followee',component:FolloweesComponent,resolve:{followees:FolloweesResolver}}
      
]
@NgModule({
    imports:[CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class FollowRoutingModule{
    
}