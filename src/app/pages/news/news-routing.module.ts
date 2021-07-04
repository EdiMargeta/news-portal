import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news.component';
import {PageNotFoundComponent} from '../../core/page-not-found/page-not-found.component';
import {CreateNewsComponent} from './components/abstract-news/news-models/create-news/create-news.component';
import {AbstractNewsComponent} from './components/abstract-news/abstract-news.component';
import {AllNewsComponent} from './components/all-news/all-news.component';

const routes: Routes = [

  {
    path: '', component: NewsComponent,
    children: [
      {path: '', component: AllNewsComponent},
      {path: 'category', component: AbstractNewsComponent},
      {path: '**', component: PageNotFoundComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
