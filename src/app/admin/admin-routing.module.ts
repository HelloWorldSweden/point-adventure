import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { AuthGuard } from '../auth-guard.service';

import { SelectActivityComponent } from './select-activity/select-activity.component';
import { SelectTeamComponent } from './select-team/select-team.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [ AuthGuard ],
        children: [
          { path: '', component: SelectActivityComponent },
          { path: 'activities', component: SelectActivityComponent },
          { path: 'team/:activity', component: SelectTeamComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
