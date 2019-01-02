import {Injectable} from '@angular/core'
 import {Observable} from 'rxjs'
 import {HttpClient,HttpHeaders} from '@angular/common/http'
 import {AuthenticationTokenService} from './authentication-token.service'
 import {apiUrl} from './API-URL'
 import {IUser,IFolloweesResponse,IFollowersResponse} from '../models'
 
  @Injectable()
 export class FollowService{
     constructor(private http:HttpClient,private authenticationTokenService:AuthenticationTokenService){
 
      }

      followUser(userKey:string){
        let authorizationToken = this.authenticationTokenService.getToken()    
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
        
        let url = apiUrl.baseUrl+'/follow/'+userKey
        let emptyBody=''

        return this.http.post(url,emptyBody,options)
        }

      unfollowUser(userKey:string){
            let authorizationToken = this.authenticationTokenService.getToken()    
            let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
            
            let url = apiUrl.baseUrl+'/follow/'+userKey
    
            return this.http.delete(url,options)
            }

      getUserFollowees():Observable<IFolloweesResponse>{
                let authorizationToken = this.authenticationTokenService.getToken()    
                let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
                let url = apiUrl.baseUrl+'/followee'
                return this.http.get<IFolloweesResponse>(url,options)
         
              }

      getUserFollowers():Observable<IFollowersResponse>{
                let authorizationToken = this.authenticationTokenService.getToken()    
                let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
                let url = apiUrl.baseUrl+'/follower'
                return this.http.get<IFollowersResponse>(url,options)
         
              }
      
      
      
      
 
  }