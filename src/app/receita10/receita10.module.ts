import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita10PageRoutingModule } from './receita10-routing.module';

import { Receita10Page } from './receita10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita10PageRoutingModule
  ],
  declarations: [Receita10Page]
})
export class Receita10PageModule {}
