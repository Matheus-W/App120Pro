import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-entradade-graos',
  templateUrl: './entradade-graos.page.html',
  styleUrls: ['./entradade-graos.page.scss'],
})
export class EntradadeGraosPage implements OnInit {

  public velocidade : string[] = ['0']; 
  public Eclusa : any = '  Ligar '; 
  private i : any = 0;
  constructor(private usuarioService : UsuarioServiceService) { }

  ngOnInit() {
  }

  LigaEclusa(){
      if(this.Eclusa == '  Ligar '){
        this.Eclusa = 'Desligar';
        this.usuarioService.Post('1*', 'EntradaDeGraos/HabilitarEclusa/')
        .then((response)=>{
             console.log(JSON.stringify(response));
        })
        .catch((response)=>{
             //console.log(JSON.stringify(response.error.text));
            
        });
      }else {
        this.Eclusa = '  Ligar ';
        this.velocidade = ['0'];
        this.i = 0;
        this.usuarioService.Post('0*', 'EntradaDeGraos/HabilitarEclusa/')
        .then((response)=>{
             console.log(JSON.stringify(response));
        })
        .catch((response)=>{
             //console.log(JSON.stringify(response.error.text));
            
        });
      }
      
  }

  PegaValor(valor){
      if(valor === '+'){
          if(this.velocidade[0] == '100'){
            this.velocidade = [this.i];
          }else{
            this.i+=5;
            this.velocidade = [this.i];
          }
          
      }else{
        if(this.velocidade[0] == '0'){
            this.velocidade = [this.i];
          }else{
            this.i-=5;
            this.velocidade = [this.i];
          }
      }
      console.log(this.i);
      this.usuarioService.Post(this.i + '*', 'EntradaDeGraos/VelocidadeEclusa/')
        .then((response)=>{
             console.log(JSON.stringify(response));
        })
        .catch((response)=>{
             //console.log(JSON.stringify(response.error.text));
            
        });
  }
}
