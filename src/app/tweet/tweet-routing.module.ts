import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {Routes,RouterModule} from '@angular/router'
import { TweetCreateComponent } from './tweet-create.component';
import { TweetUpdateComponent } from './tweet-update.component';
import { TweetResolver } from './tweet-resolver.service';
import { TweetComponent } from './tweet.component';
import {AuthenticationGuardService} from '../core'

const routes:Routes = [
    {path:'new',component:TweetCreateComponent},
    {path:'edit/:key',component:TweetUpdateComponent,resolve:{tweet:TweetResolver}}
    
]
@NgModule({
    imports:[CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class TweetRoutingModule{
    
}