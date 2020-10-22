import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-limpeza-tempo-b2',
  templateUrl: './limpeza-tempo-b2.page.html',
  styleUrls: ['./limpeza-tempo-b2.page.scss'],
})
export class LimpezaTempoB2Page implements OnInit {
    Tempob2=5;

  constructor(private modalCtrl : ModalController) { }


  ngOnInit() {
  }

  Conta(e){
      if(e == '+') {
          if(this.Tempob2<15)this.Tempob2++;
      }else{
        if(this.Tempob2>5)this.Tempob2--;
      }
  }

  async closeModal(){
      let resposta = {tempob2: this.Tempob2};
    this.modalCtrl.dismiss(resposta);
  }

}
