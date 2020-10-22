import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB1PageRoutingModule } from './limpeza-tempo-b1-routing.module';

import { LimpezaTempoB1Page } from './limpeza-tempo-b1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpezaTempoB1PageRoutingModule
  ],
  declarations: [LimpezaTempoB1Page]
})
export class LimpezaTempoB1PageModule {}
