import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constructor(private _navbarService: NavbarService) {    
    this._navbarService.navbarVisible = true;
  }

  ngOnInit(): void {

  }

}
