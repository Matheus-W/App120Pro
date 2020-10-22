import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita6PageRoutingModule } from './receita6-routing.module';

import { Receita6Page } from './receita6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita6PageRoutingModule
  ],
  declarations: [Receita6Page]
})
export class Receita6PageModule {}
