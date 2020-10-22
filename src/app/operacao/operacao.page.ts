import { UsuarioServiceService } from './../usuario-service.service';
import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { VariávelGlobal } from '../variável-global';
import {Paho} from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.page.html',
  styleUrls: ['./operacao.page.scss'],
})
export class OperacaoPage implements OnInit {
  numeropo: any = 30;
  preset: any = 30;
  poligadooudesligado: any = '0';
  OpcaoReceita: any; ReceitaAtiva: any;
  public PorcentagemPo: String[] = [this.preset];
  public PreSetPoSecante: String[] = [this.preset];
  public Bomba1: any; public Bomba2: any; public Bomba3: any; public Bomba4: any; public Vazao: any;
  public Peso: any;
  public Legenda1: String = 'Produto-1'; public Legenda2: String = 'Produto-2'; public Legenda3: String = 'Produto-3'; public Legenda4: String = 'Produto-4'; public NomeReceita: String = 'Nome da Receita';
  conect: boolean = this.variavelglobal.GetDadoConect();  
  CalibrarPeso: boolean = false;
  private client;
  valorRecebido: any;
  public KGREAL: any;
  constructor(private usuarioService : UsuarioServiceService, private variavelglobal: VariávelGlobal) { }
  
  
  ngOnInit() {
    this.onChange(']');

   // this.AtivaReceita();

  }

  ////////////////
  ConectaMQTT(){
    this.client = new Paho.MQTT.Client('200.98.175.86', 9001, 'tcc_MQTT_App-120PRO');
    this.client.onConnectionLost = this.onConnectionLost.bind(this);
    this.client.onMessageArrived = this.onMessageArrived.bind(this);
    // connect the client
    this.client.connect({onSuccess:this.onConnect.bind(this), onFailure:this.Onfalha.bind(this)});
  }

  Onfalha(){
    console.log("Erro MQTT");
  }

  onConnect(){
    console.log("Conectado MQTT");
    this.client.subscribe('120PRO/tcc');
    this.client.subscribe('120PROtccvalorPeso');
  }

  onConnectionLost(){
    console.log("Conexão MQTT perdida");
  }
  
  onMessageArrived(message){
    //console.log(message.payloadString);
    this.valorRecebido = message.payloadString;
    this.valorRecebido = this.valorRecebido.substring(0,(this.valorRecebido.length - 1));
    console.log(this.valorRecebido);
    this.KGREAL=this.valorRecebido/10.0;
  }

  /////////////////
  PesoCalibracao(e, f){
    let message
    this.Peso = f;
    if(e == 'A') this.CalibrarPeso=true;
    else if(e == 'B') {
      this.CalibrarPeso=false;
      console.log(f.toString(16));
      message = new Paho.MQTT.Message(f.toString(16));
      message.destinationName = '120PROtccvalorPeso';
      this.client.send(message);
    }
  }

  //////////

  AtivaReceita(){
    this.Bomba1 = '';
    this.Bomba2 = '';
    this.Bomba3 = '';
    this.Bomba4 = ''; 
    this.Vazao =  '';
    this.Legenda1 =  '';
    this.Legenda2 =  '';
    this.Legenda3 =  '';
    this.Legenda4 =  '';
    this.NomeReceita = '';
    this.Peso = '';
    this.variavelglobal.Load();
    this.usuarioService.Post('OK', 'AtivarReceita/')
      .then((response)=>{
          this.ReceitaAtiva = JSON.stringify(response);
          this.PercorrendoString(this.ReceitaAtiva);
          console.log(this.ReceitaAtiva);
          this.variavelglobal.LoadDismis();
      })
      .catch((response)=>{
          this.variavelglobal.AlertaDeErroPost();
          this.variavelglobal.LoadDismis();
        //this.ReceitaAtiva = JSON.stringify(response);
        //console.log('error');
        //console.log(this.ReceitaAtiva);
        //this.PercorrendoString(this.ReceitaAtiva);
      });
  }

  PercorrendoString(Dado: String){
    var i=0;
    var numero=0, numero2=0;
    let B1=''; let B2=''; let B3=''; let B4=''; let V1=''; let P1=''; let P2=''; let P3=''; let P4=''; let L=''; let p='';
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
            this.Legenda1+=String.fromCharCode(parseInt(P1, 16));
            numero2=0;
            P1='';
        }
    }else if((numero==9 || numero==10 || numero==11) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        P2+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.Legenda2+=String.fromCharCode(parseInt(P2, 16));
            numero2=0;
            P2='';
        }
    }else if((numero==12 || numero==13 || numero==14) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        P3+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.Legenda3+=String.fromCharCode(parseInt(P3, 16));
            numero2=0;
            P3='';
        }
    }else if((numero==15 || numero==16 || numero==17) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        P4+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.Legenda4+=String.fromCharCode(parseInt(P4, 16));
            numero2=0;
            P4='';
        }
    }else if((numero==18 || numero==19 || numero==20) && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
        L+= Dado.charAt(i);
        numero2++;
        if(numero2==2){
            this.NomeReceita+=String.fromCharCode(parseInt(L, 16));
            numero2=0;
            L='';
        }
    }else if(numero==21 && Dado.charAt(i) != ';' && Dado.charAt(i) != '"'){
      p+= Dado.charAt(i);  
  } 

      if(Dado.charAt(i) == '"' && numero==22){
          numero=0;
          this.Vazao=parseFloat(V1)/10.0;
          this.Bomba1=(parseFloat(B1)/10.0);
          this.Bomba2=(parseFloat(B2)/10.0);
          this.Bomba3=(parseFloat(B3)/10.0);
          this.Bomba4=(parseFloat(B4)/10.0);
          this.Peso=p;
      }   
   } 
}
  

  onChange(valor){ 
      
      if(valor==']'){
        this.usuarioService.Post('%' + valor, 'Receita/')
        .then((response)=>{
            this.OpcaoReceita = JSON.stringify(response);
            //console.log(this.OpcaoReceita);
            //console.log('%' + valor);
            this.AtivaReceita();
            //this.variavelglobal.LoadDismis();
          //alert(JSON.stringify(response));
          //fecha tela de aguarde
        })
        .catch((response)=>{
          //this.variavelglobal.LoadDismis();
          this.variavelglobal.AlertaDeErroPost();
          //this.OpcaoReceita = JSON.stringify(response);
          //console.log('error');
          //this.PercorrendoString(this.OpcaoReceita);
          //fecha tela de aguarde
        });
      }
      else{
        this.variavelglobal.Load();
        this.usuarioService.Post('%' + valor, 'Receita/')
        .then((response)=>{
            this.OpcaoReceita = JSON.stringify(response);
            console.log(this.OpcaoReceita);
            console.log('%' + valor);
            this.variavelglobal.LoadDismis();
          //alert(JSON.stringify(response));
          //fecha tela de aguarde
        })
        .catch((response)=>{
          this.variavelglobal.LoadDismis();
          this.variavelglobal.AlertaDeErroPost();
          //this.OpcaoReceita = JSON.stringify(response);
          //console.log('error');
          //this.PercorrendoString(this.OpcaoReceita);
          //fecha tela de aguarde
        });
      }    
      this.ConectaMQTT();
      
      
  }

  LigaExaustor(e){
    let Exaustor;
      if(e.detail.checked) Exaustor='1';
      else Exaustor='0';
     this.variavelglobal.Load();
      this.usuarioService.Post(Exaustor + '*', 'Operacao/LigaExaustor/')
      .then((response)=>{
          this.OpcaoReceita = JSON.stringify(response);
          console.log(response);
          this.variavelglobal.LoadDismis();
      })
      .catch((response)=>{
        this.variavelglobal.LoadDismis();
        this.variavelglobal.AlertaDeErroPost();
        //this.OpcaoReceita = JSON.stringify(response);
        //console.log('error');
      });
  }

  LigaPo(e){
    let Po;
      if(e.detail.checked) {Po='1'; this.poligadooudesligado=Po;}
      else {Po='0'; this.poligadooudesligado=Po;}
      if(this.numeropo!=30){
        this.variavelglobal.Load();
        this.usuarioService.Post(Po + this.numeropo + '*', 'Operacao/LigaPo/')
            .then((response)=>{
                this.OpcaoReceita = JSON.stringify(response);
                console.log(response);
                this.variavelglobal.LoadDismis();
            })
            .catch((response)=>{
            //this.OpcaoReceita = JSON.stringify(response);
            //console.log('error');
            this.variavelglobal.LoadDismis();
            this.variavelglobal.AlertaDeErroPost();
            });
      }else{
        this.variavelglobal.Load();
        this.usuarioService.Post(Po + this.preset + '*', 'Operacao/LigaPo/')
        .then((response)=>{
            this.OpcaoReceita = JSON.stringify(response);
            console.log(response);
            this.variavelglobal.LoadDismis();
        })
        .catch((response)=>{
          //this.OpcaoReceita = JSON.stringify(response);
          //console.log('error');
          this.variavelglobal.LoadDismis();
          this.variavelglobal.AlertaDeErroPost();
        });
      } 
  }

  SomaPorcentagempo(e){
    if(e === '+'){
        if(this.numeropo!=100){
            this.numeropo += 5;
            this.PorcentagemPo = [this.numeropo];
        } 
    }else {
        if(this.numeropo!=0){
            this.numeropo -= 5;
            this.PorcentagemPo = [this.numeropo];
        }
    }
    this.variavelglobal.Load();
    this.usuarioService.Post(this.poligadooudesligado + this.numeropo + '*', 'Operacao/LigaPo/')
      .then((response)=>{
          this.OpcaoReceita = JSON.stringify(response);
          console.log(response);
          this.variavelglobal.LoadDismis();
      })
      .catch((response)=>{
        //this.OpcaoReceita = JSON.stringify(response);
        //console.log('error');
        this.variavelglobal.LoadDismis();
        this.variavelglobal.AlertaDeErroPost();
      });
  } 
}
