import {IUser} from './user.model'
export interface IFolloweesResponse{
    Followees:Array<IUser>
    FolloweesCount:number
}