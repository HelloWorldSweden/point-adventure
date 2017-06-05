import {Component, OnInit} from '@angular/core';
import { Activity } from '../../activity';
import { ActivityService } from '../../activity.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedService } from '../../shared.service';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrls: ['./select-activity.component.css'],
  providers: [ ActivityService, TeamService ]
})
export class SelectActivityComponent implements OnInit {
  activities: Observable<Activity[]>;
  teamName: string;
  teamPoints: number;

  onClick(activity: Activity): void {
    this.router.navigate(['./admin/team', activity.$key]);
  }

  constructor(
    private activityService: ActivityService,
    private router: Router,
    private shared: SharedService,
    private teamService: TeamService
  ) {
    this.activities = activityService.getActivities();
  }

  ngOnInit(): void {}
}
