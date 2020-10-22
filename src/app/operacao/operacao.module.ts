import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacaoPageRoutingModule } from './operacao-routing.module';

import { OperacaoPage } from './operacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperacaoPageRoutingModule
  ],
  declarations: [OperacaoPage]
})
export class OperacaoPageModule {}
