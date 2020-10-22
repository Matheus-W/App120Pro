import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita3PageRoutingModule } from './receita3-routing.module';

import { Receita3Page } from './receita3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita3PageRoutingModule
  ],
  declarations: [Receita3Page]
})
export class Receita3PageModule {}
