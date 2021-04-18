import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InformationsComponent} from './components/informations.component';

const routes: Routes = [
  {path: '', component: InformationsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationsRoutingModule {
}
