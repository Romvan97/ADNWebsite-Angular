import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../../Models/User/loginInfo.model';
import { UserLog } from '../../Models/User/userLog.model';
import { Observable } from 'rxjs';
import { UserToReceive } from 'src/app/Models/User/UserToReceive.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _client: HttpClient) { }


  loginPost(loginToPost: LoginInfo): Observable<UserLog>{
    return this._client.post<UserLog>(`${environment.apiUrl}api/Auth/auth`, loginToPost)
  }

  getUser(user: UserLog): Observable<UserToReceive>{


    
      const header = new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'Authorization': `Bearer ${user.token}`
      });
    
   console.log(header)

    return this._client.get<UserToReceive>((`${environment.apiUrl}api/User/${user.id}`), {headers: header})
  }

}
