import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntertainmentComponent} from './entertainment.component';

const routes: Routes = [
  {
    path: '', component: EntertainmentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainmentRoutingModule {
}
