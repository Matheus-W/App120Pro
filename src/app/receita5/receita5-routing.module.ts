import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita5Page } from './receita5.page';

const routes: Routes = [
  {
    path: '',
    component: Receita5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita5PageRoutingModule {}
