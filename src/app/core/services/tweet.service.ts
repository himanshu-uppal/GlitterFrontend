import {Injectable} from '@angular/core'
 import {ITweet} from '../models'
 import {Observable} from 'rxjs'
 import {HttpClient} from '@angular/common/http'
 
  @Injectable()
 export class TweetService{
     constructor(private http:HttpClient){
 
      }
     getTweets():Observable<Array<ITweet>>{
         return this.http.get<Array<ITweet>>('https://conduit.productionready.io/api/articles')
 
      }
 
  }