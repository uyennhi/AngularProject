import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies'
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
  constructor() { }

  ngOnInit(): void {
  }

}
