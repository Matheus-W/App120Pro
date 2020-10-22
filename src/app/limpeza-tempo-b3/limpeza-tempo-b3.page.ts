import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-limpeza-tempo-b3',
  templateUrl: './limpeza-tempo-b3.page.html',
  styleUrls: ['./limpeza-tempo-b3.page.scss'],
})
export class LimpezaTempoB3Page implements OnInit {
    Tempob3=5;

    constructor(private modalCtrl : ModalController) { }
  
  
    ngOnInit() {
    }
  
    Conta(e){
        if(e == '+') {
            if(this.Tempob3<15)this.Tempob3++;
        }else{
          if(this.Tempob3>5)this.Tempob3--;
        }
    }
  
    async closeModal(){
        let resposta = {tempob3: this.Tempob3};
      this.modalCtrl.dismiss(resposta);
    }
  
  }
