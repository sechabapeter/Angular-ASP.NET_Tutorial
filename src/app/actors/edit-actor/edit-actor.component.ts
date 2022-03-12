import { actorCreationDTO } from './../../actors.mode';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private actvatedRoute: ActivatedRoute) { }
  model: actorCreationDTO ={name: 'Tom Holland', dateOfBirth: new Date()}

  ngOnInit(): void {
    this.actvatedRoute.params.subscribe(params =>{
      //alert(params['id']);
    })
  }

  saveChanges(actorCreationDTO: actorCreationDTO)
  {
    console.log(actorCreationDTO);
  }

}
