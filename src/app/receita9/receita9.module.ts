import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita9PageRoutingModule } from './receita9-routing.module';

import { Receita9Page } from './receita9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita9PageRoutingModule
  ],
  declarations: [Receita9Page]
})
export class Receita9PageModule {}
