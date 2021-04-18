import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateNewsComponent} from './create-news.component';
import {PageNotFoundComponent} from '../../../../../../core/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '', component: CreateNewsComponent
  },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewsRoutingModule {
}
