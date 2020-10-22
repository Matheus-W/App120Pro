import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita7Page } from './receita7.page';

const routes: Routes = [
  {
    path: '',
    component: Receita7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita7PageRoutingModule {}
