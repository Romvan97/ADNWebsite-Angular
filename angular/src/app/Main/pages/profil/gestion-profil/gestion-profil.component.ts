import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { AvatarService } from 'src/app/services/avatar.service';
import { ConnectionService } from 'src/app/services/connection.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-gestion-profil',
  templateUrl: './gestion-profil.component.html',
  styleUrls: ['./gestion-profil.component.scss']
})
export class GestionProfilComponent implements OnInit {

  userLog!: UserLog;
userAge!: Number;
userBirthdate!: Date;
avatarOfUser!: string;
usergender!: string;

  constructor(private _navbarService: NavbarService, private _connectionService:ConnectionService, private _avatarService: AvatarService,
    private _router: Router) { }

  ngOnInit(): void {

    let usergenderjson = localStorage.getItem('userGender');
    if(usergenderjson != null){
      this.usergender = JSON.parse(usergenderjson)
    }

    let avata = localStorage.getItem('avatarUser');
    if(avata != null){
      this.avatarOfUser = JSON.parse(avata)
    }
    else{this.avatarOfUser = this._avatarService.avatar}

this._navbarService.show()

this.userLog = this._connectionService.User
this.getAgeAndBirthdateofUser()


  }




getAgeAndBirthdateofUser(){

  let today = new Date().getFullYear()
let userdat = Date.parse(this.userLog.birthDate)
let userbirthdateyear = new Date(userdat).getFullYear()


this.userAge = today - userbirthdateyear;
this.userBirthdate = new Date(userdat);

}






}




