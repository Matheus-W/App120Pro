import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestaoPageRoutingModule } from './gestao-routing.module';

import { GestaoPage } from './gestao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestaoPageRoutingModule
  ],
  declarations: [GestaoPage]
})
export class GestaoPageModule {}
