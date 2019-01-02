import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Routes,RouterModule} from '@angular/router'
import { AuthenticationFormComponent } from './authentication-form.component';
import {NoAuthenticationGuardService} from '../core'

const routes:Routes = [
    {path:'register',component:AuthenticationFormComponent,canActivate:[NoAuthenticationGuardService]},
    {path:'login',component:AuthenticationFormComponent,canActivate:[NoAuthenticationGuardService]}

]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]
})
export class AuthenticationRoutingModule{

}



