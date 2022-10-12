import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { exhaustMap, first, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SessionState } from '../states/session.reducer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly _store: Store<{sessionState: SessionState}>
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this._store.select(state => state.sessionState.token).pipe(first(), exhaustMap(token => {
      if(token) {
        const clone = request.clone({setHeaders: { Authorization: 'Bearer ' + token }});
        return next.handle(clone);
      }
      return next.handle(request);
    }))
  }
}
