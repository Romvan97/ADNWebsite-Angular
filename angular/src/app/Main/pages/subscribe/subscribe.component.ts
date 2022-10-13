import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginInfo } from 'src/app/Models/User/loginInfo.model';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { subscribe_Form} from './formulaire/subscribe.form';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/API_Services/login.service';
import { RegisterService } from 'src/app/services/API_Services/register.service';


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
  logInfo: LoginInfo = {};
  rememberMe: boolean = false;
  
  
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
  ) 
  { 
    this.form = builder.group(subscribe_Form);
  
 
  }

  ngOnInit(): void {

console.log(this.form.value.subscribeGender)



  }


  


    changeValuebirthdate(event:Event): void{
     this.form.value.subscribebirthDate = this.datefromcalendar; 
    
    }

    creationAccount(){

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
  
  this._router.navigateByUrl('/home').then(() =>this._router.navigate(['/home']))
            
          }
        });
  
      }
  
      else {
        this.isValid = false;
        this._messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Vous devez remplir tous les champs.' })
  
  
      }
    


    }

 

}
