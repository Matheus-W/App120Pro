import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpezaTempoB3Page } from './limpeza-tempo-b3.page';

const routes: Routes = [
  {
    path: '',
    component: LimpezaTempoB3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpezaTempoB3PageRoutingModule {}
