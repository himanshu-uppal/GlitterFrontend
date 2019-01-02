export interface ITweet{
    message:string

}


export interface ITweetResponse{
    Tweets:ITweet[]
    TweetsCount:number
}