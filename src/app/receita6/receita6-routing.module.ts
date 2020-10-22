import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita6Page } from './receita6.page';

const routes: Routes = [
  {
    path: '',
    component: Receita6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita6PageRoutingModule {}
