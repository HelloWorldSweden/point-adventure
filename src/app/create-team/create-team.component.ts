import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  providers: [ TeamService ]
})
export class CreateTeamComponent implements OnInit {
  teamName: string;
  message: string;
  constructor( private teamService: TeamService) {}


  ngOnInit() {
  }

  createTeam(): void {
    this.teamService.createTeam(this.teamName).subscribe( success => {
      if ( !success ) {
        this.message = 'Lagnamnet finns redan, välj ett annat.';
        console.log('Gick inte');
      } else {
        console.log('Lyckades');
      }
    });
  }

}
