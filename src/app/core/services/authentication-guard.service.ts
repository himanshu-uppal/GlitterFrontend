import {Injectable} from '@angular/core'
import { AuthenticationService } from './authentication.service';
import {CanActivate,Router} from '@angular/router'

@Injectable()
export class AuthenticationGuardService implements CanActivate{

    constructor(private authenticationService:AuthenticationService,private router:Router){}

    canActivate(){
        if(this.authenticationService.isAuthenticated()){
            return true
        }
        this.router.navigate(['/login'])        
        }

   
}