import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradadeGraosPageRoutingModule } from './entradade-graos-routing.module';

import { EntradadeGraosPage } from './entradade-graos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradadeGraosPageRoutingModule
  ],
  declarations: [EntradadeGraosPage]
})
export class EntradadeGraosPageModule {}
