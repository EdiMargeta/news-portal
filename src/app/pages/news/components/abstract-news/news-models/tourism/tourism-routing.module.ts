import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TourismComponent} from './tourism.component';

const routes: Routes = [
  {
    path: '', component: TourismComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismRoutingModule {
}
