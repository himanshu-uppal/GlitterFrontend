import {Injectable} from '@angular/core'
 import {Observable} from 'rxjs'
 import {ITweet,ITweetResponse} from '../models'
 import {HttpClient,HttpHeaders} from '@angular/common/http'
 import {apiUrl} from './API-URL'
 
  @Injectable()
 export class SearchService{
     constructor(private http:HttpClient){
 
      } 
      
      searchTextInTweets(text:string):Observable<ITweetResponse>{
          
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
        let url = apiUrl.baseUrl+'/tweetsearch/'+text
        return this.http.get<ITweetResponse>(url,options)
 
      }

      searchTextInPeople(text:string):Observable<any>{
          
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
        let url = apiUrl.baseUrl+'/peoplesearch/'+text
        return this.http.get<any>(url,options)
 
      }
      
      
 
  }