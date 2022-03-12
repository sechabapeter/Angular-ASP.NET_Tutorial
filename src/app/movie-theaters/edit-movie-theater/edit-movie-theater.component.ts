import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private actvatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actvatedRoute.params.subscribe(params =>{
      //alert(params['id']);
    })
  }

}
