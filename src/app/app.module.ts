import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { ActivityDetailComponent } from './activity-detail.component';
import { ActivitiesComponent} from './activities.component';

import { AppRoutingModule } from './app-routing.module';
import { CreateTeamComponent } from './create-team/create-team.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  declarations: [ AppComponent, ActivityDetailComponent, ActivitiesComponent, CreateTeamComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
