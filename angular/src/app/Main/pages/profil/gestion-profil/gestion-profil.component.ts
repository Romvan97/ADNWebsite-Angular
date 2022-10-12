import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-gestion-profil',
  templateUrl: './gestion-profil.component.html',
  styleUrls: ['./gestion-profil.component.scss']
})
export class GestionProfilComponent implements OnInit {

  constructor(private _navbarService: NavbarService) { }

  ngOnInit(): void {
this._navbarService.show()



  }

}
