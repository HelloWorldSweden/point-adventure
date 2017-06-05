import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  providers: [ TeamService ]
})
export class CreateTeamComponent implements OnInit {
  teamName: string;
  message: string;
  constructor( private teamService: TeamService, private router: Router, private shared: SharedService ) {}


  ngOnInit() {
    if ( this.shared.teamName !== null) {
      this.router.navigate(['./activity']);
    }
  }

  createTeam(): void {
    this.teamService.createTeam(this.teamName).subscribe( success => {
      if ( !success ) {
        this.message = 'Lagnamnet finns redan, välj ett annat.';
        console.log('Gick inte');
      } else {
        this.shared.teamName = this.teamName;
        this.router.navigate(['./activities']);
        console.log('Redirect to activities');
      }
    });
  }

}
