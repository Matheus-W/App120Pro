import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita4PageRoutingModule } from './receita4-routing.module';

import { Receita4Page } from './receita4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita4PageRoutingModule
  ],
  declarations: [Receita4Page]
})
export class Receita4PageModule {}
