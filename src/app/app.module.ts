import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ActivityDetailComponent } from './activity-detail.component';
import { ActivitiesComponent} from './activities.component';
import { ActivityService } from './activity.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, ActivityDetailComponent, ActivitiesComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
