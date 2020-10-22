import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpezaTempoB4Page } from './limpeza-tempo-b4.page';

const routes: Routes = [
  {
    path: '',
    component: LimpezaTempoB4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpezaTempoB4PageRoutingModule {}
