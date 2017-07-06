import {Component, OnInit} from '@angular/core';
import { Activity } from '../../activity';
import { ActivityService } from '../../activity.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedService } from '../../shared.service';
import { TeamService } from '../../team.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.css'],
  providers: [ ActivityService, TeamService ]
})
export class SelectTeamComponent implements OnInit {
  activity: Activity;
  teams: Observable<Activity[]>;

  onClick(team: any): void {
    this.teamService.markActivityForTeam(this.activity, team);
  }

  constructor(
    private activityService: ActivityService,
    private router: Router,
    private shared: SharedService,
    private teamService: TeamService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.teams = teamService.getTeams();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.activityService.getActivity(params['activity']))
      .subscribe(activity => {
        this.activity = activity;
      });
  }

  goBack(): void {
    this.location.back();
  }

  pointsGiven(team: any): boolean {
    if ( team.activities ) {
      for ( let a of team.activities ) {
        if ( a ) {
          if ( a.id === this.activity.id ) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
