import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lat:any=''
  lng:any=''
  constructor(private geolocation: Geolocation,public loadingController: LoadingController,public alertController: AlertController)
  {

  }
  
  async getLoc()
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      });
    await loading.present();

    this.geolocation.getCurrentPosition({maximumAge: 1000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //alert("r succ"+resp.coords.latitude)
      //alert(JSON.stringify( resp.coords));
      loading.dismiss()
      this.lat=resp.coords.latitude
      this.lng=resp.coords.longitude
      },er=>{
        //alert("error getting location")
        loading.dismiss()
        this.showLoader('Can not retrieve Location')
      }).catch((error) => {
      //alert('Error getting location'+JSON.stringify(error));
      loading.dismiss()
      this.showLoader('Error getting location - '+JSON.stringify(error))
      });
  }


 async showLoader(msg)
  {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  
}
