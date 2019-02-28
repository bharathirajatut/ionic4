import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { HttpClient } from '@angular/common/http';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(firebase: Firebase,private http: HttpClient,private push: Push,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this.platform.is('android')){
        this.init()
       }
    });
  }

  init()
  {
    const options: PushOptions = {
      android: {
        icon: 'icon',
        iconColor:'#e21e2e',
       sound:'true',
       forceShow:true
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   }
   
   const pushObject: PushObject = this.push.init(options);
   
   //use this for broadcasting messages
   pushObject.subscribe('ampersand-academy-ionic-android').then(data=>{
    //alert('subscribe success: ' );
   });
   
   //receive notification
   pushObject.on('notification').subscribe((notification: any) => {
     console.log('Received a notification', notification)
      //alert('Received a notification'+JSON.stringify(notification))
    });
   
    //save token locally
   pushObject.on('registration').subscribe((registration: any) => {
     console.log('Device registered', registration)
     //alert('Device registered'+JSON.stringify(registration))
     this.storage.set('token', registration.registrationId);

     /*this.http.get('http://192.168.0.111/ionic/save-token.php?token='+JSON.stringify(registration)).subscribe((response) => {
    console.log(response);
});
*/
    
    });
   
   pushObject.on('error').subscribe(error => {
     console.error('Error with Push plugin', error)
     alert('Error with Push plugin'+JSON.stringify(error))
   });
   
  }
}
