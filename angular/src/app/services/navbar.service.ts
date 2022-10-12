import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

navbarVisible?: boolean;

  constructor() { this.navbarVisible = false }

  hide(){this.navbarVisible = false}
 show(){this.navbarVisible = true}

}
