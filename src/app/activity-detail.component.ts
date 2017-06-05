import { Component, Input, OnInit } from '@angular/core';
import { Activity } from './activity';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ActivityService } from './activity.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
  providers: [ ActivityService ]
})

export class ActivityDetailComponent implements OnInit {
  @Input() activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.activityService.getActivity(params['key']))
      .subscribe(activity => this.activity = activity);
  }

  goBack(): void {
    this.location.back();
  }
}
