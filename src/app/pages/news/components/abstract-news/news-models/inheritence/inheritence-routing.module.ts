import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InheritenceComponent} from './inheritence.component';

const routes: Routes = [
  {
    path: '', component: InheritenceComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritenceRoutingModule {
}
