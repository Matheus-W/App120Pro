import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita8Page } from './receita8.page';

const routes: Routes = [
  {
    path: '',
    component: Receita8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita8PageRoutingModule {}
