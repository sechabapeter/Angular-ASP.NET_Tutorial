import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    this.moviesInTheaters= [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_QL75_UX380_CR0,1,380,562_.jpg'

    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX380_CR0,0,380,562_.jpg'

    }];

    this.moviesFutureRelease = [];
    // this.moviesFutureRelease = [{
    //   title: 'Bad-Man',
    //   releaseDate: new Date(),
    //   price: 1400.99

    // },
    // {
    //   title: 'Morning',
    //   releaseDate: new Date('2017-11-14'),
    //   price: 900.99

    // }];

  }

  moviesInTheaters;
  moviesFutureRelease;
}
