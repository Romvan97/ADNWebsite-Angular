import { NgIfContext } from '@angular/common';
import { Injectable } from '@angular/core';
import { User } from '../Models/User/createUserForm.model';
import { UserLog } from '../Models/User/userLog.model';
import { UserToReceive } from '../Models/User/UserToReceive.model';
import { LoginService } from './API_Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private _connected: boolean = false;
  private _currentUser!: UserLog;
  private _userReceivetoTest!: UserToReceive;
  private _IsValid: boolean = false;

  constructor(private _loginService: LoginService) { }




  get isConnected(): boolean {

    let localStorageObject = localStorage.getItem('currentUser');
    let sessionStorageObject = sessionStorage.getItem('currentUser');


    if (localStorageObject != null) {
      this._currentUser = JSON.parse(localStorageObject);
    }
    if (sessionStorageObject != null) {
      this._currentUser = JSON.parse(sessionStorageObject);
    }

    if (this._currentUser != null || this._currentUser != undefined) {

      // d'abord tester si le token est valide en faisant une requete au serveur
      this._loginService.getUser(this._currentUser).subscribe({
        next: (userInfo) => this._userReceivetoTest = userInfo,
        error: (error) => console.log('errreeeeeeeeeeeeeeeeeuur'),
        complete: () => console.log(this._userReceivetoTest)
      });


      if (this._userReceivetoTest != undefined && this._userReceivetoTest.firstName == this._currentUser.firstName) {
        this._IsValid = true;
        return true;
      }
      else {
        this._IsValid = false;
        return false;
      }
    }
    else return false;

  }


  get User(): UserLog {

    return this._currentUser;

  }

}
