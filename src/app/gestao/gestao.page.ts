import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { LoadingController } from '@ionic/angular';
import { VariávelGlobal } from '../variável-global';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.page.html',
  styleUrls: ['./gestao.page.scss'],
})
export class GestaoPage implements OnInit {

  constructor(private usuarioService : UsuarioServiceService, private loadingCtrl: LoadingController, private variavelglobal: VariávelGlobal) { }
  conect: boolean = this.variavelglobal.GetDadoConect(); 
  ngOnInit() {
      //this.inicializa();
  }

  ///////////////////////
  async inicializa(){
    let Carregando = await this.loadingCtrl.create({
        message: 'Carregando',
        translucent: true,
        spinner: 'dots',
    });
    await Carregando.present();

          
    this.usuarioService.Post('`', 'NavPage/')
      .then((response)=>{
        console.log(response);
        Carregando.dismiss();
      })
      .catch((response)=>{
        console.log('error');
        Carregando.dismiss();
      });
  }

  /////////////////

}
