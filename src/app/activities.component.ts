import { Component } from '@angular/core';
import { Activity } from './activity';
import { ActivityService } from './activity.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'my-activities',
  templateUrl: './activities.component.html',
  styleUrls: [ './activities.component.css' ],
  providers: [ ActivityService ]
})

export class ActivitiesComponent {
  selectedActivity: Activity;
  activities: Observable<Activity[]>;

  onClick(activity: Activity): void {
    this.router.navigate(['./activity', activity.$key]);
  }

  constructor(
    private activityService: ActivityService,
    private router: Router
  )
  {
    this.activities = activityService.getActivities();
  }
}


