import { UsuarioServiceService } from './../usuario-service.service';
import { Component, OnInit } from '@angular/core';
import { VariávelGlobal } from '../variável-global';


@Component({
  selector: 'app-limpeza',
  templateUrl: './limpeza.page.html',
  styleUrls: ['./limpeza.page.scss'],
})
export class LimpezaPage implements OnInit {
    Resposta: any; RecabendoTerminodeBomba: any;

    public b1: boolean = false;
    public b2: boolean = false;
    public b3: boolean = false;
    public b4: boolean = false;
    public b5: boolean = false;
    public b6: boolean = false;
    public b7: boolean = false;
    public b8: boolean = false;
    public b11: boolean = false;
    public b22: boolean = false;
    public b33: boolean = false;
    public b44: boolean = false;

  constructor(private usuarioService : UsuarioServiceService, private variavelglobal: VariávelGlobal) { }
  conect: boolean = this.variavelglobal.GetDadoConect();  
  
  ngOnInit() {
    this.inicializaLimpezaDisp();
  }

  ///////////////////////
  inicializaLimpezaDisp(){
    
    this.variavelglobal.Load();
          
    this.usuarioService.Post('$', 'Limpeza/')
      .then((response)=>{
        console.log(response);
        this.variavelglobal.LoadDismis();
      })
      .catch((response)=>{
        console.log('error');
        this.variavelglobal.LoadDismis();
      });
  }

  ///////////////// 

  LimpezaDeBombas(e: any){
    if(e=='1'){
        if(this.b1) {
            this.b1 = false;
            this.b11 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        }
        else {
            this.b1 = true;
            this.b11 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }else if(e=='2'){
        if(this.b2){
            this.b2 = false;
            this.b22 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        } else {
            this.b2 = true;
            this.b22 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }else if(e=='3'){
        if(this.b3) {
            this.b3 = false;
            this.b33 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        }else {
            this.b3 = true;
            this.b33 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }else if(e=='4'){
        if(this.b4) {
            this.b4 = false;
            this.b44 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        }else {
            this.b4 = true;
            this.b44 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }
    else if(e=='5'){
        if(this.b1) {
            this.b1 = false;
            this.b5 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        }else {
            this.b1 = true;
            this.b5 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }else if(e=='6'){
        if(this.b2) {
            this.b2 = false;
            this.b6 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        }else {
            this.b2 = true;
            this.b6 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }else if(e=='7'){
        if(this.b3) {
            this.b3 = false;
            this.b7 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        }else {
            this.b3 = true;
            this.b7 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }else if(e=='8'){
        if(this.b4) {
            this.b4 = false;
            this.b8 = false;
            this.AtivaLimpezaDeBomba(e + '0');
        }else {
            this.b4 = true;
            this.b8 = true;
            this.AtivaLimpezaDeBomba(e + '1');
        }
    }

    //this.AtivaLimpezaDeBomba(e);
    
  }

   AtivaLimpezaDeBomba(valor: any){
    
    this.variavelglobal.Load();
          
    this.usuarioService.Post('~' + valor, 'Limpeza/LigarBomba/')
      .then((response)=>{
        this.Resposta = JSON.stringify(response);
        //this.timerRecebetermino();
        this.variavelglobal.LoadDismis();
      })
      .catch((response)=>{
        this.Resposta = JSON.stringify(response);
        this.variavelglobal.LoadDismis();
      });
  }

  timerRecebetermino(){
    let timerId=setInterval(() =>{
        this.usuarioService.Post('OK', 'Limpeza/RecebeTerminodeBomba/')
        .then((response)=>{
            this.RecabendoTerminodeBomba = JSON.stringify(response);
            console.log(JSON.stringify(response));
            console.log(JSON.stringify(response));
            if(this.RecabendoTerminodeBomba == '"B1*"' ){
                console.log(JSON.stringify(response));
                if(this.b1)this.b1 = false;
                else this.b1 = true;
                clearInterval(timerId);
            } else if(this.RecabendoTerminodeBomba == '"B2*"'){
                if(this.b2)this.b2 = false;
                else this.b2 = true;
                clearInterval(timerId);
            }
            else if(this.RecabendoTerminodeBomba == '"B3*"'){
                if(this.b3)this.b3 = false;
                else this.b3 = true;
                clearInterval(timerId);
            }
            
            else if(this.RecabendoTerminodeBomba == '"B4*"'){
                if(this.b4)this.b4 = false;
                else this.b4 = true;
                clearInterval(timerId);
            }
          })
          .catch((response)=>{
            this.RecabendoTerminodeBomba = JSON.stringify(response);
            console.log(this.RecabendoTerminodeBomba);
          });
    }, 20000);
  }


  /////////////////////////////////
  message : string = 'Puxe Para Atualizar a Página!';
  atualizarMensagem(event : any){
    this.usuarioService.Post('`', 'Limpeza/Dados/')
      .then((response)=>{
        //console.log(JSON.stringify(response));
        //this.timerRecebetermino();
      })
      .catch((response)=>{
        //console.log(JSON.stringify(response));
      });
    
    setTimeout(()=>{
      //this.message = 'Parabéns, você aprendeu usar o componente Refresher';
      this.usuarioService.Post('OK', 'Limpeza/RecebeTerminodeBomba/')
      .then((response)=>{
        this.RecabendoTerminodeBomba=JSON.parse(response);
        console.log(JSON.parse(response));
        this.AtualizaImagemBombas();
        //this.timerRecebetermino();
      })
      .catch((response)=>{
        console.log(JSON.stringify(response));
      });
      event.target.complete();
    }, 2000); 
  }

  AtualizaImagemBombas(){
    if(this.RecabendoTerminodeBomba.B1 == 0)this.b1 = false;
    else this.b1 = true;
    if(this.RecabendoTerminodeBomba.B2 == 0)this.b2 = false;
    else this.b2 = true;
    if(this.RecabendoTerminodeBomba.B3 == 0)this.b3 = false;
    else this.b3 = true;
    if(this.RecabendoTerminodeBomba.B4 == 0)this.b4 = false;
    else this.b4 = true;
  }
    
}
