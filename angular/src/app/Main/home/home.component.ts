import { Component, OnInit } from '@angular/core';
import { count, Subscription } from 'rxjs';
import { Movie } from 'src/app/Models/Movie/movie.model';
import { MovieService } from 'src/app/services/API_Services/movie.service';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  moviesForView: Movie[] = [];



  constructor(private _getMoviesService: MovieService, private _navbarService: NavbarService) { 

    
  }

  ngOnInit(): void {

  this._navbarService.show();
  this._getMoviesService.getMovies().subscribe({

    next: m => this.moviesForView = m
   })
   
  }



}
