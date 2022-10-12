import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MessageService, PrimeIcons } from 'primeng/api';
import { loadingStop } from '../states/loading.reducer';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly _store: Store,
    private readonly _messageService: MessageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(
      catchError(xhr => {
        this._store.dispatch(loadingStop());
        switch(xhr.status) {
          case 400:
            this._messageService.add({ severity: 'error', icon: PrimeIcons.EXCLAMATION_TRIANGLE, detail: typeof xhr.error === 'string' ? xhr.error : Object.values(xhr.error.errors).join(', ') });
            break;
          case 401:
          case 403:
            this._messageService.add({ severity: 'error', icon: PrimeIcons.EXCLAMATION_TRIANGLE, detail: xhr.error });
            break;
          case 404:
            this._messageService.add({ severity: 'error', icon: PrimeIcons.EXCLAMATION_TRIANGLE, detail: 'L\'adresse du surveur est introuvable' });
            break;
          case 418:
            this._messageService.add({ severity: 'error', icon: PrimeIcons.EXCLAMATION_TRIANGLE, detail: 'I\'m a teapot !!' });
            break;
          default:
            this._messageService.add({ severity: 'error', icon: PrimeIcons.EXCLAMATION_TRIANGLE, detail: 'La connexion au serveur à échoué' });
            break;
        }
        throw xhr;
      })
    );
  }
}
