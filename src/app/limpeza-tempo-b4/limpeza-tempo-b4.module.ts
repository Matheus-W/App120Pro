import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB4PageRoutingModule } from './limpeza-tempo-b4-routing.module';

import { LimpezaTempoB4Page } from './limpeza-tempo-b4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpezaTempoB4PageRoutingModule
  ],
  declarations: [LimpezaTempoB4Page]
})
export class LimpezaTempoB4PageModule {}
