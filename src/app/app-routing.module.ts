import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule),
  },
  {
    path: 'attractions',
    loadChildren: () => import('./pages/attractions/attractions.module').then(m => m.AttractionsModule),
  },
  {
    path: 'cinema',
    loadChildren: () => import('./pages/cinema/cinema.module').then(m => m.CinemaModule),
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule),
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/informations/informations.module').then(m => m.InformationsModule),
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule),
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
