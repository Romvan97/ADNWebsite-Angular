import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateUserForm } from 'src/app/Models/User/createUserForm.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _client: HttpClient) { }

  registerUser(userToRegister: CreateUserForm): Observable<string>{
    return this._client.post<string>(`${environment.apiUrl}api/User/register`, userToRegister)
  }

}
