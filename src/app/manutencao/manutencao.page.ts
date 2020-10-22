import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { UsuarioServiceService } from '../usuario-service.service';
import { VariávelGlobal } from '../variável-global';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.page.html',
  styleUrls: ['./manutencao.page.scss'],
})
export class ManutencaoPage implements OnInit {

  constructor(private navCtrl : NavController, private usuarioService : UsuarioServiceService, private loadingCtrl: LoadingController, private alertController: AlertController, private variavelglobal: VariávelGlobal) { }
  conect: boolean = this.variavelglobal.GetDadoConect();
  ngOnInit() {
      //this.inicializa();
      //this.conect=this.variavelglobal.GetDadoConect();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      mode: 'ios',
      translucent: true,
      subHeader: 'Erro no método post.',
      message: 'Confira sua conexão com a máquina.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ///////////////////////
  async inicializa(){
    let Carregando = await this.loadingCtrl.create({
        message: 'Carregando',
        translucent: true,
        spinner: 'bubbles',
    });
    await Carregando.present();

          
    this.usuarioService.Post('¨', 'NavPage/')
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

  async LigaPo(e){
    let Po;
      if(e.detail.checked) Po='1';
      else Po='0';
      let Carregando = await this.loadingCtrl.create({
        message: 'Carregando',
        translucent: true,
        spinner: 'bubbles',
    });
    await Carregando.present();
      
        this.usuarioService.Post(Po +  '30*', 'Operacao/LigaPo/')
        .then((response)=>{
            Carregando.dismiss();
            console.log(response);
        })
        .catch((response)=>{
          Carregando.dismiss();
          this.presentAlert();
          //console.log('error');
        });
    } 

    async LigaTunel(ev){
        let Tunel;
        if(ev.detail.checked) Tunel='1';
        else Tunel='0';
        let Carregando = await this.loadingCtrl.create({
            message: 'Carregando',
            translucent: true,
            spinner: 'bubbles',
        });
        await Carregando.present();
        this.usuarioService.Post(Tunel + '*', 'Manutencao/LigaTunel/')
        .then((response)=>{
            Carregando.dismiss();
            console.log(response);
        })
        .catch((response)=>{
            Carregando.dismiss();
            this.presentAlert();
            //console.log('error');
        });
    }

    async LigaAgitador(event, qual: String){
        let ligadoDesligado;
        if(event.detail.checked) ligadoDesligado='1';
        else ligadoDesligado='0';
        
        let Carregando = await this.loadingCtrl.create({
            message: 'Carregando',
            translucent: true,
            spinner: 'bubbles',
        });
        await Carregando.present();
        

        this.usuarioService.Post(qual + ligadoDesligado + '*', 'Manutencao/LigaAgitadores/')
        .then((response)=>{
            //this.OpcaoReceita = JSON.stringify(response);
            Carregando.dismiss();
            console.log(response);
        })
        .catch((response)=>{
          //this.OpcaoReceita = JSON.stringify(response);
          Carregando.dismiss();
          this.presentAlert();
          //console.log('error');
        });
    }

    async LigaBomba(event, qual: String){
        let ligadoDesligado;
        if(event.detail.checked) ligadoDesligado='1';
        else ligadoDesligado='0';

        let Carregando = await this.loadingCtrl.create({
            message: 'Carregando',
            translucent: true,
            spinner: 'bubbles',
        });
        await Carregando.present();

        
        this.usuarioService.Post(qual + ligadoDesligado + '*', 'Manutencao/LigaBombas/')
        .then((response)=>{
            //this.OpcaoReceita = JSON.stringify(response);
            Carregando.dismiss();
            console.log(response);
        })
        .catch((response)=>{
          //this.OpcaoReceita = JSON.stringify(response);
          Carregando.dismiss();
          this.presentAlert();
          //console.log('error');
        });
    }


}
