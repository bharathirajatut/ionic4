import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title:any='Welcome to Ampersand Academy'
  message:any='Hello, Welcome to Ampersand Academy. You can test push notification using this app'
  
  constructor(public alertController: AlertController,
    private http:HttpClient,private storage: Storage,
    public loadingController: LoadingController,private device:Device)
  {

  }

 reset()
 {
   this.title=''
   this.message=''
 }
 async sendNotification()
  {
   let token= await this.storage.get('token').then((token) => {
     return token
    })
    //alert(token)
      let ua='model:'+this.device.model+',platform:'+this.device.model+',version:'+this.device.version+',manufacturer:'+this.device.manufacturer
      let url="https://ampersandacademy.com/ionic/push/send-notification.php";
      let params="?title="+this.title+"&message="+this.message+"&ua="+ua+"&token="+token;
      //alert(url+params)
      await this.http.get(url+params).subscribe((response) => {
        console.log(response);
        //alert(JSON.stringify(response))
      });
      this.showAlert()    
  
  }

  async showAlert()
  {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Notification sent to your device. Please wait for sometime, the notification will appear on your device.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
