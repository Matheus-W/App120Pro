import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConexaoPageRoutingModule } from './conexao-routing.module';

import { ConexaoPage } from './conexao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConexaoPageRoutingModule
  ],
  declarations: [ConexaoPage]
})
export class ConexaoPageModule {}
