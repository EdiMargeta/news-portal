import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SportComponent} from './sport.component';

const routes: Routes = [
  {
    path: '', component: SportComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule {
}
