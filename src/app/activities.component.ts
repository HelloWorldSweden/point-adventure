import {Component, OnInit} from '@angular/core';
import { Activity } from './activity';
import { ActivityService } from './activity.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './shared.service';
import { TeamService } from './team.service';

@Component({
  selector: 'my-activities',
  templateUrl: './activities.component.html',
  styleUrls: [ './activities.component.css' ],
  providers: [ ActivityService, TeamService ]
})

export class ActivitiesComponent implements OnInit {
  activities: Observable<Activity[]>;
  teamName: string;
  teamPoints: number;

  onClick(activity: Activity): void {
    this.router.navigate(['./activity', activity.$key]);
  }

  constructor(
    private activityService: ActivityService,
    private router: Router,
    private shared: SharedService,
    private teamService: TeamService
  ) {
    this.activities = activityService.getActivities();
  }

  ngOnInit(): void {
    if ( this.shared.teamName === null ) {
      console.log('Redirect to team');
      this.router.navigate(['./team']);
    }
    this.teamName = this.shared.teamName;
    this.teamService.getTeam(this.teamName).subscribe( team => {
      console.log(team);
      this.teamPoints = team.points;
    })
  }
}


