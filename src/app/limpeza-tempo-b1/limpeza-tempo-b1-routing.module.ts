import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpezaTempoB1Page } from './limpeza-tempo-b1.page';

const routes: Routes = [
  {
    path: '',
    component: LimpezaTempoB1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpezaTempoB1PageRoutingModule {}
