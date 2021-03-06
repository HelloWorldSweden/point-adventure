import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {
  teams: FirebaseListObservable<any[]>;
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.teams = db.list('/teams');
  }
  createTeam(name: string): Observable<boolean> {
    return this.db.list('/teams', { query: { orderByChild: 'name', equalTo: name}}).map( response => {
      if ( response.length === 0 ) {
        // Team does not exist, create it
        this.db.list('teams').push({name: name, points: 0});
        return true;
      } else {
        return false;
      }
    });

  }
  getTeam(teamName: string): Observable<any> {
    return this.db.list('/teams', { query: { orderByChild: 'name', equalTo: teamName}} ).map( team => {
      return team[0];
    })
  }
  getTeams(): Observable<any[]> {
    return this.teams;
  }
  markActivityForTeam(activity: any, team: any): void {
    console.log('Shall mark activity');
    this.getTeam(team.name).subscribe(t => {
      console.log('Fetched team: ');
      console.log(t);
      if (t.activities) {
        for (let a of t.activities) {
          if ( a ) {
            if (a.id === activity.id) {
              console.log('Activity found');
              return false;
            }
          }

        }
      }
      if ( activity) {
        console.log('Adding points');
        this.db.object('/teams/' + team.$key + '/points').$ref.transaction(points => {
          return team.points ? points + activity.points : activity.points;
        });
        let activities = t.activities;
        delete activity.$ref;
        delete activity.$key;
        if (activities) {
          activities.push(activity);
        } else {
          activities = [activity];
        }
        console.log(activities);
        this.db.object('/teams/' + team.$key).update({activities: activities});
      }


    });
  }

}
