import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase) {
    this.db = db;
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
}
