import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita9Page } from './receita9.page';

const routes: Routes = [
  {
    path: '',
    component: Receita9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita9PageRoutingModule {}
