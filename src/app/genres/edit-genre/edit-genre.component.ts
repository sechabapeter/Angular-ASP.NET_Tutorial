import { genreCreationDTO } from './../genre.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  model: genreCreationDTO = {name: 'Drama'}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {

    });
  }
  saveChanges(genreCreationDTO: genreCreationDTO) {

  }

}
