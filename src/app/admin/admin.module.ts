import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SelectActivityComponent } from './select-activity/select-activity.component';
import { SelectTeamComponent } from './select-team/select-team.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, SelectActivityComponent, SelectTeamComponent]
})
export class AdminModule { }
