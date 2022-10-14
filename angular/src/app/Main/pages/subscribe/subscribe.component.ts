import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginInfo } from 'src/app/Models/User/loginInfo.model';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { subscribe_Form } from './formulaire/subscribe.form';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/API_Services/login.service';
import { RegisterService } from 'src/app/services/API_Services/register.service';
import { CreateUserForm } from 'src/app/Models/User/createUserForm.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  providers: [MessageService]
})
export class SubscribeComponent implements OnInit {

  isValid: boolean = true;
  form: FormGroup;
  userLog!: UserLog;
  userToCreat: CreateUserForm = {};
  rememberMe: boolean = false;
  userCreateToLog: LoginInfo = {};
  responsehttp!: HttpErrorResponse;

  //Date pour le calendar
  maxDate: Date = new Date();
  daysbefore: Date = new Date(new Date().setFullYear(1920));
  datefromcalendar!: Date;

  constructor(
    private _navbarService: NavbarService,
    builder: FormBuilder,
    private _messageService: MessageService,
    private _loginService: LoginService,
    private _router: Router,
    private _registerService: RegisterService,
  ) {
    this.form = builder.group(subscribe_Form);


  }

  ngOnInit(): void {



  }





  changeValuebirthdate(event: Event): void {
    this.form.value.subscribebirthDate = this.datefromcalendar;

  }


  creationAccount(): void {


    if (this.form.valid) {


      this.userToCreat.email = this.form.value.subscribeEmail
      this.userToCreat.password = this.form.value.subscribePassword
      this.userToCreat.birthDate = this.form.value.subscribebirthDate
      this.userToCreat.firstName = this.form.value.subscribefirstName
      this.userToCreat.lastName = this.form.value.subscribelastName
      localStorage.setItem('userGender', JSON.stringify(this.form.value.subscribeGender))



      if (this.rememberMe) {
        
        localStorage.setItem('loginfo', JSON.stringify(this.userToCreat))
      }
      else {
     
        sessionStorage.setItem('loginfo', JSON.stringify(this.userToCreat))
      }

      this._router.navigateByUrl('/subscribe-avatar').then(() => this._router.navigate(['/subscribe-avatar']))


    }

  else this._messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue' })
  }



}
