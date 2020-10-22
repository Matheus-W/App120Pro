import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { UsuarioServiceService } from '../usuario-service.service';
import { VariávelGlobal } from '../variável-global';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  constructor(private navCtrl : NavController, private usuarioService : UsuarioServiceService, private loadingCtrl: LoadingController,  private variavelglobal: VariávelGlobal) { }
  conect: boolean = this.variavelglobal.GetDadoConect(); 
  ngOnInit() {
    //this.inicializaOp();
  }

  ///////////////////////
  async inicializaOp(){
    let Carregando = await this.loadingCtrl.create({
        message: 'Carregando',
        translucent: true,
        spinner: 'dots',
    });
    await Carregando.present();

          
    this.usuarioService.Post('@', 'NavPage/')
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

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
