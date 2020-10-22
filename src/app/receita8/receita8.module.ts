import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita8PageRoutingModule } from './receita8-routing.module';

import { Receita8Page } from './receita8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita8PageRoutingModule
  ],
  declarations: [Receita8Page]
})
export class Receita8PageModule {}
