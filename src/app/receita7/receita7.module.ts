import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita7PageRoutingModule } from './receita7-routing.module';

import { Receita7Page } from './receita7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita7PageRoutingModule
  ],
  declarations: [Receita7Page]
})
export class Receita7PageModule {}
