import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../../Models/Movie/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _client: HttpClient) { }

 

getMovies(): Observable<Movie[]>{
  return this._client.get<Movie[]>(`${environment.apiUrl}api/Movie`)
}


}
