import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConexaoPage } from './conexao.page';

const routes: Routes = [
  {
    path: '',
    component: ConexaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConexaoPageRoutingModule {}
