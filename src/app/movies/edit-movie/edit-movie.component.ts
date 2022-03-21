import { movieCreationDTO, movieDTO } from './../movies.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private actvatedRoute: ActivatedRoute) { }

  model: movieDTO = {title: 'Spider-Man', inTheaters: true, summary: "whatever",
   releaseDate: new Date(), trailer: 'ABCDE', poster: 'https://m.media-amazon.com/images/M/MV5BYTE4NTI1YmItN2UwZi00NmIyLThkODEtYjRmOGRlMjZkMTlhXkEyXkFqcGdeQXVyMTM0NTgzOTM3._V1_QL75_UY562_CR46,0,380,562_.jpg'}

  ngOnInit(): void {
    this.actvatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){


  }



}
