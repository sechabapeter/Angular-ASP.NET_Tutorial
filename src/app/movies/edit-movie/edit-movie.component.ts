import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private actvatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actvatedRoute.params.subscribe(params => {



    });
  }

}
