import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreateUserForm } from 'src/app/Models/User/createUserForm.model';
import { LoginInfo } from 'src/app/Models/User/loginInfo.model';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { LoginService } from 'src/app/services/API_Services/login.service';
import { RegisterService } from 'src/app/services/API_Services/register.service';
import { AvatarService } from 'src/app/services/avatar.service';


@Component({
  selector: 'app-subscribe-avatar',
  templateUrl: './subscribe-avatar.component.html',
  styleUrls: ['./subscribe-avatar.component.scss']
})
export class SubscribeAvatarComponent implements OnInit {

  HasClick: boolean = false;
  responsehttp!: HttpErrorResponse;
  userToCreat: CreateUserForm = {};
  userCreateToLog: LoginInfo = {};
  userLog!: UserLog;
  rememberMe: boolean = false;

  allAvatar: string[] = [];

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(event) {
    if (this.HasClick == false) {

      localStorage.clear()
      sessionStorage.clear()


    }
  }




  constructor(
    private _messageService: MessageService,
    private _loginService: LoginService,
    private _registerService: RegisterService,
    private _avatarService: AvatarService,
    private _router: Router,
  ) { }

  ngOnInit(): void {

    this.allAvatar = this._avatarService.allListAvatar;

    let localStorageObject = localStorage.getItem('loginfo');
    let sessionStorageObject = sessionStorage.getItem('loginfo');

    if (localStorageObject != null) {
      this.userToCreat = JSON.parse(localStorageObject);
      this.rememberMe = true;
    }
    if (sessionStorageObject != null) {
      this.userToCreat = JSON.parse(sessionStorageObject);

    }
    else {
      this._router.navigateByUrl('/subscription').then(() => this._router.navigate(['/subscription']))
    }



  }

  creationAccount(): void {


    this._registerService.registerUser(this.userToCreat).subscribe({

      next: (respons) => this.responsehttp = respons,
      error: (error) => {

        this.responsehttp = error;
        console.log(this.responsehttp)
        if (this.responsehttp.status == 200) {

          this.autoLog();

        }
        else this._messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Une erreur du côté serveur est survenue' })

      },

      complete: () => { }

    });


  }

  autoLog(): void {

    localStorage.removeItem('loginfo')
    sessionStorage.removeItem('loginfo')

    this.userCreateToLog.email = this.userToCreat.email;
    this.userCreateToLog.password = this.userToCreat.password;

    this._loginService.loginPost(this.userCreateToLog).subscribe({

      next: (userInfo) => this.userLog = userInfo,
      error: (error) => { console.log(this.userCreateToLog), this._messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue' }) },
      complete: () => {



        if (this.rememberMe) {
          localStorage.setItem('currentUser', JSON.stringify(this.userLog))

        }
        else {
          sessionStorage.setItem('currentUser', JSON.stringify(this.userLog))
        }

        this._router.navigateByUrl('/home').then(() => this._router.navigate(['/home']))

      }
    });

  }


  avatarChoise(index: number): void {

    this.HasClick = true;
    this._avatarService.changeAvatar(index)

    localStorage.setItem('avatarUser', JSON.stringify(this._avatarService.avatar))

    this.creationAccount()

  }


}
