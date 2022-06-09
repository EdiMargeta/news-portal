import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {AdminGuard} from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    // canActivate: [ LoginGuard ]
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule),
    canActivate: [ AuthGuard ]

  },
  {
    path: 'attractions',
    loadChildren: () => import('./pages/attractions/attractions.module').then(m => m.AttractionsModule),
    canActivate: [ AuthGuard ]

  },
  {
    path: 'cinema',
    loadChildren: () => import('./pages/cinema/cinema.module').then(m => m.CinemaModule),
    canActivate: [ AuthGuard ]

  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule),
    canActivate: [ AuthGuard ]

  },
  {
    path: 'information',
    loadChildren: () => import('./pages/informations/informations.module').then(m => m.InformationsModule),
    canActivate: [ AuthGuard ]

  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule),
    canActivate: [ AuthGuard ]

  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
