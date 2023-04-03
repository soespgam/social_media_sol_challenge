import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component'


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard_home',
        component: HomeDashboardComponent,
      }

    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
