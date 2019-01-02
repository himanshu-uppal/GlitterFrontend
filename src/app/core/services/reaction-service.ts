import {Injectable} from '@angular/core'
 import {Observable} from 'rxjs'
 import{IReactionTypesResponse} from '../models'

 import {HttpClient,HttpHeaders} from '@angular/common/http'
 import {apiUrl} from './API-URL'
 
  @Injectable()
 export class ReactionService{
     constructor(private http:HttpClient){
 
      } 
      
      getReactionTypes():Observable<IReactionTypesResponse>{
          
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
        let url = apiUrl.baseUrl+'/reaction/'
        return this.http.get<IReactionTypesResponse>(url,options)
 
      }

    
      
      
 
  }