import { Component } from '@angular/core';
import { VariávelGlobal } from '../variável-global';
//import { HeaderColor } from '@ionic-native/header-color/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
  constructor(private variavelglobal: VariávelGlobal) {}
  conect: boolean = this.variavelglobal.GetDadoConect();
  
  // ngOnInit() {
  //   this.headerColor.tint('#becb29');
  // }
  

}
