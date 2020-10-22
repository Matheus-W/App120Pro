import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradadeGraosPage } from './entradade-graos.page';

const routes: Routes = [
  {
    path: '',
    component: EntradadeGraosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradadeGraosPageRoutingModule {}
