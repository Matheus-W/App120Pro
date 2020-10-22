import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita4Page } from './receita4.page';

const routes: Routes = [
  {
    path: '',
    component: Receita4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita4PageRoutingModule {}
