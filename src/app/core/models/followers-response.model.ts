import {IUser} from './user.model'
export interface IFollowersResponse{
    Followers:Array<IUser>
    FollowersCount:number
}