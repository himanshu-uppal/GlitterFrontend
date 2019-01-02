import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {IUser} from '../models'
import { Observable, ReplaySubject } from 'rxjs';
import {AuthenticationTokenService} from './authentication-token.service'
import {apiUrl} from './API-URL'

@Injectable()
export class AuthenticationService{
    currentUser:IUser
    
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isUserAuthenticated = this.isAuthenticatedSubject.asObservable();
    constructor(private http:HttpClient, private authenticationTokenService:AuthenticationTokenService){
        if(this.authenticationTokenService.getToken()){
            this.isAuthenticatedSubject.next(true)
        }
        else{
            this.isAuthenticatedSubject.next(false)
        }
    }   

    authenticateUser(authenticationType:string,userValues:any):Observable<IUser>{
        
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
       // let options = {headers:new Headers({'Content-Type':'application/json'})}
        //                                     'Accept': 'application/json',
        //                                  'Access-Control-Allow-Credentials':true,
        //                                         'Access-Control-Allow-Origin':true })}
        if(authenticationType == 'register'){
            
            let user = {
                
                    firstName:userValues.firstName,
                    lastName:userValues.lastName,
                    email:userValues.email,
                    password:userValues.password,
                    contactNumber:userValues.contactNumber,
                    country:userValues.country            
                   
                
            }

            console.log(user)
            return this.http.post<IUser>(apiUrl.baseUrl+'/register',user,options);
            //return this.http.get<IUser>(apiUrl.baseUrl+'/register',options);
        }
        if(authenticationType == 'login'){
           
            let user = {
                
                    email:userValues.email,
                    password:userValues.password
                
            }

            console.log(user)
            return this.http.post<IUser>(apiUrl.baseUrl+'/login',user,options);
        }  
        

    }

    loginUser(){       
        this.authenticationTokenService.setToken(this.currentUser.Token)
        this.isAuthenticatedSubject.next(true);
    }
    isAuthenticated(){
        if(this.authenticationTokenService.getToken()){
            return true       
        }
        
        return false
    }
    logoutUser(){
        this.authenticationTokenService.removeToken()
        this.isAuthenticatedSubject.next(false);
    }

    getCurrentUserToken(){
        return this.authenticationTokenService.getToken()
    }
    getCurrentUser(){
        let authorizationToken = this.authenticationTokenService.getToken()    
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
        let url = apiUrl.baseUrl+'/user'
        return this.http.get<any>(url,options)
    } 
    getCurrentUsername(){
        this.getCurrentUser().subscribe(data=>{
            return data.firstName + data.lastName
        })
    }
}