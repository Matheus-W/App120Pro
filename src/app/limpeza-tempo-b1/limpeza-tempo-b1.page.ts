import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-limpeza-tempo-b1',
  templateUrl: './limpeza-tempo-b1.page.html',
  styleUrls: ['./limpeza-tempo-b1.page.scss'],
})
export class LimpezaTempoB1Page implements OnInit {
  Tempob1=5;

  constructor(private modalCtrl : ModalController) { }


  ngOnInit() {
  }

  Conta(e){
      if(e == '+') {
          if(this.Tempob1<15)this.Tempob1++;
      }else{
        if(this.Tempob1>5)this.Tempob1--;
      }
  }

  async closeModal(){
      let resposta = {tempob1: this.Tempob1};
    this.modalCtrl.dismiss(resposta);
  }

}
