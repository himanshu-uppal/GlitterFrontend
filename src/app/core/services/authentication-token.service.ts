import {Injectable} from '@angular/core'

@Injectable()
export class AuthenticationTokenService{
    getToken():string{
        return localStorage['jwtToken']
    }
    setToken(token:string){
        console.log(token)
        localStorage['jwtToken'] = token
    }
    removeToken(){
        localStorage.removeItem('jwtToken')
    }
}