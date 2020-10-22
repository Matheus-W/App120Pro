import { UsuarioServiceService } from './../usuario-service.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { VariávelGlobal } from './../variável-global';
//private variavelglobal: VariávelGlobal 

@Component({
  selector: 'app-conexao',
  templateUrl: './conexao.page.html',
  styleUrls: ['./conexao.page.scss'],
})
export class ConexaoPage implements OnInit {
   public ipMaquina : string;
   public IP;
   public temip: boolean = false;
   
   constructor(private usuarioService : UsuarioServiceService, private loadingCtrl: LoadingController, private storage: Storage, private variavelglobal: VariávelGlobal) { }

   conect: boolean=this.variavelglobal.GetDadoConect();


///////////////////////////////////////////////////////

  ngOnInit() {
      this.vendoIP();
      if(this.IP!=undefined) this.temip = true;
  }


  async vendoIP(){
    await this.storage.get('IP').then((val) => {
        this.IP = val;
    });
  }


  TrocaIP(e){
      if(e == undefined || e == ''){
          this.temip = false;
          this.IP = e;
          this.storage.set('IP', e);
      }else{
        this.IP = e;
        this.storage.set('IP', e);
        this.temip = true;
      }
  }

  Conectar(e){
        this.usuarioService.AdicionaIP(this.IP);
        this.OperandoPeloApp(e);
  }

  

  async OperandoPeloApp(Y){
    let Carregando = await this.loadingCtrl.create({
        message: 'Carregando',
        translucent: true,
        spinner: 'bubbles',
    });
    await Carregando.present();

          
    this.usuarioService.Post(Y, 'NavPage/')
      .then((response)=>{
        console.log(response);
        if(Y == '#') this.conect=true;
        else this.conect=false;
        this.variavelglobal.AppConect(this.conect);
        Carregando.dismiss();
      })
      .catch((response)=>{
        this.variavelglobal.AbrirAlert();
        Carregando.dismiss();
      });

    if(Y == '¨')this.usuarioService.AdicionaIP('');
    
  }

}
