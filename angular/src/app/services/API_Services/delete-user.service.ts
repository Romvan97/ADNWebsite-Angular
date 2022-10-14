import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserForm } from 'src/app/Models/User/createUserForm.model';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private _client: HttpClient) { }

  deleteUser(userID: UserLog): Observable<any>{
    return this._client.delete<any>(`${environment.apiUrl}api/User/register`)
  }



}
