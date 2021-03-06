import { Injectable } from '@angular/core';

import { Activity } from './activity';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {
  activities: FirebaseListObservable<Activity[]>;
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.activities = db.list('/activities');
  }
  getActivities(): Observable<Activity[]> {
    return this.activities.map(Activity.fromJsonList);
  }
  getActivity(key: string): Observable<Activity> {
    return this.getActivities().map( activities => activities.find( activity => activity.$key === key ));
  }
}
