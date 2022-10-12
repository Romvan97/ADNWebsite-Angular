import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { HasForm } from '../interfaces/has-form';

@Injectable({
  providedIn: 'root'
})
export class FormSubmittedGuard implements CanDeactivate<HasForm> {

  constructor(
    private readonly _confirmationService: ConfirmationService
  ) {}

  canDeactivate(
    component: HasForm,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.fg?.dirty) {
        return new Promise(resolve => {
          this._confirmationService.confirm({
              message: 'Êtes-vous sûr de vouloir quitter cette page, toutes les données non sauvegardées seront perdues?',
              accept: () => {
                resolve(true);
              },
              reject: () => {
                resolve(false);
              }
          });
        });
      }
      return true;
  }
}
