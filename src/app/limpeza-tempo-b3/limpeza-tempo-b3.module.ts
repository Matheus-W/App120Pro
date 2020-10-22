import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpezaTempoB3PageRoutingModule } from './limpeza-tempo-b3-routing.module';

import { LimpezaTempoB3Page } from './limpeza-tempo-b3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpezaTempoB3PageRoutingModule
  ],
  declarations: [LimpezaTempoB3Page]
})
export class LimpezaTempoB3PageModule {}
