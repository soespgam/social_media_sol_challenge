import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardSocialMediaComponent } from './components/card-social-media/card-social-media.component';
import { CardStatisticsComponent } from './components/card-statistics/card-statistics.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeDashboardComponent,
    CardSocialMediaComponent,
    CardStatisticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
