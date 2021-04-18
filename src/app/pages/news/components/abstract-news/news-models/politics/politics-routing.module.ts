import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoliticsComponent} from './politics.component';

const routes: Routes = [
  {
    path: '', component: PoliticsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticsRoutingModule {
}
