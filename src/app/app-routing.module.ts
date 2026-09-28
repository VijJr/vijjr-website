import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DisciplineComponent } from './pages/discipline/discipline.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Vijay Ravi · Software, Games & Robotics' },
  { path: 'software', component: DisciplineComponent, data: { discipline: 'software' }, title: 'Software Engineering · Vijay Ravi' },
  { path: 'games', component: DisciplineComponent, data: { discipline: 'games' }, title: 'Game Development · Vijay Ravi' },
  { path: 'robotics', component: DisciplineComponent, data: { discipline: 'robotics' }, title: 'Robotics · Vijay Ravi' },
  { path: 'about', component: AboutComponent, title: 'About · Vijay Ravi' },
  { path: 'work/:id', component: WorkDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
