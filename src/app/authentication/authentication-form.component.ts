import {Component} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router'
import {AuthenticationService} from '../core'
import {IUser} from '../core'
import {Observable} from 'rxjs'

@Component({
    selector:'authentication-form',
    templateUrl:'./authentication-form.component.html'
})
export class AuthenticationFormComponent{
    firstName:string
    lastName:string
    email:string
    password:string
    contactNumber:string
    country:string
    authenticationType:string
    currentUser:IUser
    authenticationForm

    constructor(private route:ActivatedRoute,
        private authenticationService:AuthenticationService,
        private router:Router){}

    ngOnInit(){
        this.authenticationType = this.route.snapshot.url[this.route.snapshot.url.length-1].path
        console.log(this.authenticationType)
    }    

    authenticate(formValues){
        this.authenticationService.authenticateUser(this.authenticationType,formValues).subscribe((data => {
            this.currentUser = data
            this.authenticationService.currentUser = data
            console.log('user authenticated')
            console.log(this.currentUser)
            this.authenticationService.loginUser()
            this.router.navigate(['/'])  //can navigate to previous url

        } ),
        error=>{
            console.log(error)
        }) 
        
    }
   
          

}