import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-receita7',
  templateUrl: './receita7.page.html',
  styleUrls: ['./receita7.page.scss'],
})
export class Receita7Page implements OnInit {
    OpcaoReceita: any;  ReceitaAtiva: any;

    public VazaoNominal: any;
    public Produto1: any;
    public Valor1: any;
    public Produto2: any;
    public Valor2: any;
    public Produto3: any;
    public Valor3: any;
    public Produto4: any;
    public Valor4: any;
    public NomeDaReceita: any;

    
    
    EnviaDadosDeReceita: String;
    Dados:String[]=['0','0','0','0','0','0','0','0','0']; 

  constructor(private navCtrl : NavController, private usuarioService : UsuarioServiceService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.usuarioService.Post('%7', 'Receita/')
      .then((response)=>{
          this.OpcaoReceita = JSON.stringify(response);
          console.log(this.OpcaoReceita);
        //alert(JSON.stringify(response));
        //fecha tela de aguarde
      })
      .catch((response)=>{
        //this.OpcaoReceita = JSON.stringify(response);
        console.log('error');
        //this.PercorrendoString(this.OpcaoReceita);
        console.log(JSON.stringify(response));
        //fecha tela de aguarde
      });

      this.AtivaReceita();
  }


  ///////////////////////////////
  async AtivaReceita(){
    this.VazaoNominal='';
    this.Valor1='';
    this.Valor2='';
    this.Valor3='';
    this.Valor4='';
    this.Produto1='';
    this.Produto2='';
    this.Produto3='';
    this.Produto4='';
    this.NomeDaReceita='';

    let Carregando = await this.loadingCtrl.create({
        message: 'Carregando',
        translucent: true,
        spinner: 'dots',
    });
    await Carregando.present();

          
    this.usuarioService.Post('OK', 'AtivarReceita/')
      .then((response)=>{
        this.ReceitaAtiva = JSON.stringify(response);
        console.log(response);
        console.log(this.ReceitaAtiva);
        this.PercorrendoString(this.ReceitaAtiva);
        Carregando.dismiss();
        
      })
      .catch((response)=>{
        //this.ReceitaAtiva = JSON.stringify(response);
        console.log('error');
        Carregando.dismiss();
      });
  }

  PercorrendoString(Dado: String){
    var i=0;
    var numero=0, numero2=0;
    let B1=''; let B2=''; let B3=''; let B4=''; let V1=''; let P1=''; let P2=''; let P3=''; let P4=''; let L='';
  for (i=0; i<Dado.length; i++) {
      if(Dado.charAt(i) == ';'){
         numero++;
      }
      if(numero==1 && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        B1+=Dado.charAt(i);
      }else if(numero==2 && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        B2+=Dado.charAt(i);
      }else if(numero==3 && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        B3+=Dado.charAt(i); 
      }else if(numero==4 && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        B4+=Dado.charAt(i);
      }else if(numero==5 && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        V1+=Dado.charAt(i);
    }else if((numero==6 || numero==7 || numero==8) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        P1+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.Produto1+=String.fromCharCode(parseInt(P1, 16));
            numero2=0;
            P1='';
        }
    }else if((numero==9 || numero==10 || numero==11) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        P2+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.Produto2+=String.fromCharCode(parseInt(P2, 16));
            numero2=0;
            P2='';
        }
    }else if((numero==12 || numero==13 || numero==14) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        P3+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.Produto3+=String.fromCharCode(parseInt(P3, 16));
            numero2=0;
            P3='';
        }
    }else if((numero==15 || numero==16 || numero==17) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        P4+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.Produto4+=String.fromCharCode(parseInt(P4, 16));
            numero2=0;
            P4='';
        }
    }else if((numero==18 || numero==19 || numero==20) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        L+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.NomeDaReceita+=String.fromCharCode(parseInt(L, 16));
            numero2=0;
            L='';
        }
    }
      if(Dado.charAt(i) == '"' && numero==21){
          numero=0;
          this.VazaoNominal=parseFloat(V1)/10.0;
          this.Valor1=(parseFloat(B1)/10.0);
          this.Valor2=(parseFloat(B2)/10.0);
          this.Valor3=(parseFloat(B3)/10.0);
          this.Valor4=(parseFloat(B4)/10.0);
          
      }   
   } 
}

  //////////////////////////////

  PegaVazao(vazao, nomedareceita){
    let caracteres=0;
    if(nomedareceita.length==12){
        this.Dados[9]=nomedareceita;
    }else {
        this.Dados[9]=nomedareceita;
        caracteres=(12)-(nomedareceita.length);
        for(var r=0; r<caracteres; r++) this.Dados[9]+=' ';
    }
    this.Dados[8]=vazao.replace('.', '');
  }

  PegaProduto(numero, Nome, valor){
    let caracteres=0;  
    if(numero==1){
        if(Nome.length==12){
            this.Dados[0]=Nome;
        }else {
            this.Dados[0]=Nome;
            caracteres=(12)-(Nome.length);
            for(var r=0; r<caracteres; r++) this.Dados[0]+=' ';
        }
        this.Dados[1]=valor.replace('.', '');
      }else if(numero==2){
        if(Nome.length==12){
            this.Dados[2]=Nome;
        }else {
            this.Dados[2]=Nome;
            caracteres=(12)-(Nome.length);
            for(var r=0; r<caracteres; r++) this.Dados[2]+=' ';
        }
        this.Dados[3]=valor.replace('.', '');
      }else if(numero==3){
        if(Nome.length==12){
            this.Dados[4]=Nome;
        }else {
            this.Dados[4]=Nome;
            caracteres=(12)-(Nome.length);
            for(var r=0; r<caracteres; r++) this.Dados[4]+=' ';
        }
        this.Dados[5]=valor.replace('.', '');
      }else if(numero==4){
        if(Nome.length==12){
            this.Dados[6]=Nome;
        }else {
            this.Dados[6]=Nome;
            caracteres=(12)-(Nome.length);
            for(var r=0; r<caracteres; r++) this.Dados[6]+=' ';
        }
        this.Dados[7]=valor.replace('.', '');
      }
    console.log(numero);
    console.log(Nome);
    console.log(valor);
  }

    async SalvarEnviar(){
    let Carregando = await this.loadingCtrl.create({
        message: 'Salvando',
        translucent: true,
        spinner: 'dots',
    });
    await Carregando.present();

    let resposta;
      this.EnviaDadosDeReceita = '(;' + '7' + ';' + this.Dados[0] + ';' + this.Dados[1] + ';' + this.Dados[2] +';' + this.Dados[3] + ';' + this.Dados[4] + ';' + this.Dados[5] + ';' + this.Dados[6] + ';' + this.Dados[7] + ';' + this.Dados[8] + ';' + this.Dados[9] + ';^';
      console.log(this.EnviaDadosDeReceita);

      this.usuarioService.Post(this.EnviaDadosDeReceita, 'SalvaReceita/')
      .then((response)=>{
        resposta = JSON.stringify(response);
        console.log(resposta);
        Carregando.dismiss();
      })
      .catch((response)=>{
        //resposta = JSON.stringify(response.error.text);
        console.log('error');
        Carregando.dismiss();
      });
      this.navCtrl.navigateForward('receitas');
  }
}