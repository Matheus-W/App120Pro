import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-limpeza-tempo-b4',
  templateUrl: './limpeza-tempo-b4.page.html',
  styleUrls: ['./limpeza-tempo-b4.page.scss'],
})
export class LimpezaTempoB4Page implements OnInit {
    Tempob4=5;

    constructor(private modalCtrl : ModalController) { }
  
  
    ngOnInit() {
    }
  
    Conta(e){
        if(e == '+') {
            if(this.Tempob4<15)this.Tempob4++;
        }else{
          if(this.Tempob4>5)this.Tempob4--;
        }
    }
  
    async closeModal(){
        let resposta = {tempob4: this.Tempob4};
      this.modalCtrl.dismiss(resposta);
    }
  
  }
