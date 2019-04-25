import { Component } from '@angular/core';

import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private locationAccuracy: LocationAccuracy,private alertController:AlertController)
  {

  }

  enableLocation(){

    // the accuracy option will be ignored by iOS
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        console.log('Request successful')
        this.showLoader('Location Enable Request successful')
      
      },
      error => {
        console.log('Error requesting location permissions', error)
        this.showLoader('Error requesting location permissions '+JSON.stringify(error))
      }
    );
  
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
