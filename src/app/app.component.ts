import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    //{
    //  title: 'Home',
    //  url: '/home',
    //  icon: 'home'
    //},
    {
      title: 'Conexão',
      url: '/conexao',
      icon: 'wifi'
    },
    {
        title: 'Operação',
        url: '/operacao',
        icon: 'power'
    },
    {
        title: 'Receitas',
        url: '/receitas',
        icon: 'options'
    },
    {
        title: 'Limpeza',
        url: '/limpeza',
        icon: 'trash'
    },
    {
        title: 'Manutenção',
        url: '/manutencao',
        icon: 'construct'
    },
    {
        title: 'Gestão',
        url: '/gestao',
        icon: 'attach'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
