import { AlertController, LoadingController } from '@ionic/angular';

export class VariávelGlobal {
    AppConectado=false;

    constructor(private alertController: AlertController, private loadingCtrl: LoadingController){}

    AppConect(Conectado: boolean){
        this.AppConectado=Conectado;
    }

    GetDadoConect(){
        return this.AppConectado;
    }

    async AbrirAlert() {
        const alert = await this.alertController.create({
          header: 'Alerta!',
          mode: 'ios',
          translucent: true,
          message: 'IP incorreto ou falha na conexão. Verifique se a máquina está conectada.',
          buttons: ['OK']
        });
    
        await alert.present();
    }

    async AlertaDeErroPost() {
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
      
      Carregando;
      async Load(){
        //let Carregando = await this.loadingCtrl.create({
            this.Carregando = await this.loadingCtrl.create({
            message: 'Carregando',
            translucent: true,
            spinner: 'bubbles',
        });
        await this.Carregando.present();
      }

      async LoadDismis(){
        await this.Carregando.dismiss();
      }
      

}
