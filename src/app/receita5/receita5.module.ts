import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita5PageRoutingModule } from './receita5-routing.module';

import { Receita5Page } from './receita5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita5PageRoutingModule
  ],
  declarations: [Receita5Page]
})
export class Receita5PageModule {}
