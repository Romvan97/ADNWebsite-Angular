import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginInfo } from 'src/app/Models/User/loginInfo.model';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { LoginService } from 'src/app/services/API_Services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { login_Form } from './formulaire/login.form';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  isValid: boolean = true;
  form: FormGroup;
  userLog!: UserLog;
  logInfo: LoginInfo = {};
  rememberMe: boolean = false;

  


  constructor(
    private _navbarService: NavbarService,
    private _loginService: LoginService,
    builder: FormBuilder,
    private _router: Router,
    private _messageService: MessageService,
  ) {
    this.form = builder.group(login_Form);
  }

  ngOnInit(): void {

    this._navbarService.hide();

  }


  onLogin(): void {

   


    if (this.form.valid) {
      this.logInfo.email = this.form.value.loginEmail
      this.logInfo.password = this.form.value.loginPassword


      this._loginService.loginPost(this.logInfo).subscribe({
        next: (userInfo) => this.userLog = userInfo,
        error: (error) =>  this._messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Email ou mot de passe invalide.'}),
        complete: () => {

          if (this.rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(this.userLog))
          }
          else {
            sessionStorage.setItem('currentUser', JSON.stringify(this.userLog))
          }

          this._router.navigate(['/home'])
        }
      });

    }

    else {
      this.isValid = false;
      this._messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Vous devez remplir tous les champs.' })


    }
  

}
















}


