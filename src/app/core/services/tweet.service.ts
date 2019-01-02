import {Injectable} from '@angular/core'
 import {ITweet,ITweetResponse} from '../models'
 import {Observable} from 'rxjs'
 import {HttpClient,HttpHeaders} from '@angular/common/http'
 import {AuthenticationTokenService} from './authentication-token.service'
 import {apiUrl} from './API-URL'
 
  @Injectable()
 export class TweetService{
     constructor(private http:HttpClient,private authenticationTokenService:AuthenticationTokenService){
 
      }
     getFeed():Observable<ITweetResponse>{
        let authorizationToken = this.authenticationTokenService.getToken()    
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
        let url = apiUrl.baseUrl+'/feed'
        return this.http.get<ITweetResponse>(url,options)
 
      }

      getTweet(tweetKey:string):Observable<ITweet>{

        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}

          let url = apiUrl.baseUrl+'/tweet/'+tweetKey

          return this.http.get<ITweet>(url,options)
    }

    saveTweet(tweetValues:ITweet):Observable<ITweet>{
        let authorizationToken = this.authenticationTokenService.getToken()    
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}       

        let tweet = {            
              Message: tweetValues.message            
            
          }
          console.log('sent tweet')
          console.log(tweet)

       return this.http.post<ITweet>(apiUrl.baseUrl+'/tweet',tweet,options)
    }

    updateTweet(tweetValues:any,tweetKey:string):Observable<ITweet>{
        let authorizationToken = this.authenticationTokenService.getToken()    
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}       

        let tweet = {
           
              Message: tweetValues.Message,
             
            
          }         

          let url = apiUrl.baseUrl+'/tweet/'+tweetKey

          return this.http.put<ITweet>(url,tweet,options)


    }

    deleteTweet(tweetKey:string){

        let authorizationToken = this.authenticationTokenService.getToken()
       
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
        let url = apiUrl.baseUrl+'/tweet/'+tweetKey
      
        return this.http.delete(url,options)

    }

    addReaction(tweetKey:string,reactionKey:string){
        let authorizationToken = this.authenticationTokenService.getToken()    
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
        
        let url = apiUrl.baseUrl+'/tweet/'+tweetKey + '/reaction/'+reactionKey
        let body = ''

        return this.http.post(url,body,options)
        }

        removeReaction(tweetKey:string,reactionKey:string){
            let authorizationToken = this.authenticationTokenService.getToken()    
            let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `${authorizationToken}`})}
            
            let url = apiUrl.baseUrl+'/tweet/'+tweetKey + '/reaction/'+reactionKey
    
            return this.http.delete(url,options)
            }

        
 
  }