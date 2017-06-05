import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ActivityDetailComponent } from './activity-detail.component';
import { CreateTeamComponent } from './create-team/create-team.component';
const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activity/:key', component: ActivityDetailComponent },
  { path: 'activities',     component: ActivitiesComponent },
  { path: 'team',     component: CreateTeamComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
