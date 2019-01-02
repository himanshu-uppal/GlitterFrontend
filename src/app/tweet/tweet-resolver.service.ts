import {Injectable} from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TweetService } from '../core';
import { map } from 'rxjs/operators';


@Injectable()
export class TweetResolver implements Resolve<any>{
    constructor(private tweetService:TweetService){}

    resolve(route:ActivatedRouteSnapshot){
        //console.log(route)
        return this.tweetService.getTweet(route.params['key']).pipe(map(tweet => tweet))
    }

}