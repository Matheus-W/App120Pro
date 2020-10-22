import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManutencaoPage } from './manutencao.page';

const routes: Routes = [
  {
    path: '',
    component: ManutencaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManutencaoPageRoutingModule {}
