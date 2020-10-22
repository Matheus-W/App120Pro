import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita10Page } from './receita10.page';

const routes: Routes = [
  {
    path: '',
    component: Receita10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita10PageRoutingModule {}
