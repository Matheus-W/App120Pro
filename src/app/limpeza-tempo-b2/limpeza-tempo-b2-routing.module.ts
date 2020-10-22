import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpezaTempoB2Page } from './limpeza-tempo-b2.page';

const routes: Routes = [
  {
    path: '',
    component: LimpezaTempoB2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpezaTempoB2PageRoutingModule {}
