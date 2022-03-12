import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  genres = [{id: 1, name: 'Drama'}, {id: 2, name: 'Action'}];

  movies = [
    {title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_QL75_UX380_CR0,1,380,562_.jpg'},
    {title: 'Moana', poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX380_CR0,0,380,562_.jpg'},
    {title: 'Inception', poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg'}

  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });
    this.form.valueChanges
    .subscribe(values => {
       this.movies = this.originalMovies;
       this.filterMovies(values);
    })
  }
  filterMovies(values: any)
   {
     if (values.title) {
       this.movies = this.movies.filter(movies => movies.title.indexOf(values.title) !== -1);
     }
   }
  clearForm() {
    this.form.reset();
  }

}
