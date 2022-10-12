import { Component, OnInit } from '@angular/core';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { ConnectionService } from 'src/app/services/connection.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-gestion-profil',
  templateUrl: './gestion-profil.component.html',
  styleUrls: ['./gestion-profil.component.scss']
})
export class GestionProfilComponent implements OnInit {

  userLog!: UserLog;

  constructor(private _navbarService: NavbarService, private _connectionService:ConnectionService) { }

  ngOnInit(): void {
this._navbarService.show()

this.userLog = this._connectionService.User



  }

}
