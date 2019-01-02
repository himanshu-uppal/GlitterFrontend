import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { TweetCreateComponent } from './tweet-create.component';
import {TweetUpdateComponent} from './tweet-update.component'
import {TweetRoutingModule} from './tweet-routing.module'
import {FormsModule} from '@angular/forms'
import {TweetService} from '../core'
import {TweetResolver} from './tweet-resolver.service'
import {TweetComponent} from './tweet.component'
import {AuthenticationGuardService} from '../core'



@NgModule({
    declarations:[
        TweetCreateComponent,
        TweetUpdateComponent,
        TweetComponent,
    ],
       
    imports:[CommonModule,TweetRoutingModule,FormsModule],
    providers:[TweetService,
        TweetResolver,
        AuthenticationGuardService,
         ]

})
export class TweetModule{

} 