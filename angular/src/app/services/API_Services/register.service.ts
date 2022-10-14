import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CreateUserForm } from 'src/app/Models/User/createUserForm.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _client: HttpClient) { }

  registerUser(userToRegister: CreateUserForm): Observable<HttpErrorResponse>{
    return this._client.post<HttpErrorResponse>(`${environment.apiUrl}api/User/register`, userToRegister)
  }

}
