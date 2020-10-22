import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacaoPage } from './operacao.page';

const routes: Routes = [
  {
    path: '',
    component: OperacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacaoPageRoutingModule {}
