import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManutencaoPageRoutingModule } from './manutencao-routing.module';

import { ManutencaoPage } from './manutencao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManutencaoPageRoutingModule
  ],
  declarations: [ManutencaoPage]
})
export class ManutencaoPageModule {}
