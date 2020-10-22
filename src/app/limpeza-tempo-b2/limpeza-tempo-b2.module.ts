import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB2PageRoutingModule } from './limpeza-tempo-b2-routing.module';

import { LimpezaTempoB2Page } from './limpeza-tempo-b2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpezaTempoB2PageRoutingModule
  ],
  declarations: [LimpezaTempoB2Page]
})
export class LimpezaTempoB2PageModule {}
