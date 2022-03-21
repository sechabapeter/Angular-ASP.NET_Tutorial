import { MovieTheatersDTO } from './../movie-theaters.modul';
import { coordinatesMap } from './../../utilities/map/coordinate';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieTheatersCreationDTO } from '../movie-theaters.modul';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;

  @Input()
  model: MovieTheatersDTO;

  @Output()
  onSaveChanges = new EventEmitter<MovieTheatersCreationDTO>();

  initialCoordinates: coordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['',{
        Validators: [Validators.required]
      }],
      latitude: ['',{
        Validators: [Validators.required]
      }]

    });
    if (this.model !== undefined) {
       this.form.patchValue(this.model);
       this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  onSelectedLocation(coordinates: coordinatesMap){
    this.form.patchValue(coordinates);

  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
