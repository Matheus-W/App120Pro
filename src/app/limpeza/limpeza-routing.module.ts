import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpezaPage } from './limpeza.page';

const routes: Routes = [
  {
    path: '',
    component: LimpezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpezaPageRoutingModule {}
