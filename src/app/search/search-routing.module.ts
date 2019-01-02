import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {Routes,RouterModule} from '@angular/router'
import { SearchComponent } from './search.component';
import { SearchedPeopleResolver } from './searched-people-resolver.service';
import {SearchedTweetsResolver} from './searched-tweets-resolver.service';

const routes:Routes = [  
    {path:':text',component:SearchComponent,resolve:{searchedPeople:SearchedPeopleResolver,
        searchedTweets:SearchedTweetsResolver
       }
    }
   
    
      
]
@NgModule({
    imports:[CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class SearchRoutingModule{
    
}