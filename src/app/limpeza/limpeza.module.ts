import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpezaPageRoutingModule } from './limpeza-routing.module';

import { LimpezaPage } from './limpeza.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpezaPageRoutingModule
  ],
  declarations: [LimpezaPage, ],
  entryComponents: [],
})
export class LimpezaPageModule {}
