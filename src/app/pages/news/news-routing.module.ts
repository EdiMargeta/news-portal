import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news.component';
import {PageNotFoundComponent} from '../../core/page-not-found/page-not-found.component';
import {CreateNewsComponent} from './components/abstract-news/news-models/create-news/create-news.component';

const routes: Routes = [

  {
    path: '', component: NewsComponent,
    children: [
      { path: '', redirectTo: 'tourism', pathMatch: 'full' },
      {
        path: 'tourism',
        pathMatch: 'full',
        loadChildren: () => import('./components/abstract-news/news-models/tourism/tourism.module').then(m => m.TourismModule),
      },
      {
        path: 'politics',
        pathMatch: 'full',
        loadChildren: () => import('./components/abstract-news/news-models/politics/politics.module').then(m => m.PoliticsModule),
      },
      {
        path: 'culture',
        pathMatch: 'full',
        loadChildren: () => import('./components/abstract-news/news-models/culture/culture.module').then(m => m.CultureModule),
      },
      {
        path: 'inheritance',
        pathMatch: 'full',
        loadChildren: () => import('./components/abstract-news/news-models/inheritence/inheritence.module').then(m => m.InheritenceModule),
      },
      {
        path: 'sport',
        pathMatch: 'full',
        loadChildren: () => import('./components/abstract-news/news-models/sport/sport.module').then(m => m.SportModule),
      },
      {
        path: 'entertainment',
        pathMatch: 'full',
        loadChildren: () => import('./components/abstract-news/news-models/entertainment/entertainment.module').then(m => m.EntertainmentModule),
      },
      {
        path: 'create-article',
        loadChildren: () => import('./components/abstract-news/news-models/create-news/create-news.module').then(m => m.CreateNewsModule),
      },
    ]
  },
  { path: 'news/create-article', component: CreateNewsComponent },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
