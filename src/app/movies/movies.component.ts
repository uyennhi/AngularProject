import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies'
import {fakeMovies} from '../fake-movies'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie ={
    id: 1,
    name: 'Uyên Nhi is a kind girl',
    releaseYear: 1997
  }
  movies = fakeMovies;
  constructor() { }

  ngOnInit(): void {
  }

  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
    alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }
}
