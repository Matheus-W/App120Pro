import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita3Page } from './receita3.page';

const routes: Routes = [
  {
    path: '',
    component: Receita3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita3PageRoutingModule {}
