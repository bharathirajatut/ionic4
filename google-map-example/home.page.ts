import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: GoogleMap;
  constructor(private platform:Platform) {
    //this code is used to avoid the error in browser. You can remove this if statement if needed
    if(platform.is("android"))
    {
      this.loadMap()
    }
   }


  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBJZKCGHFVkOiy4hqYAlW9_jEcWQKeFEVY',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBJZKCGHFVkOiy4hqYAlW9_jEcWQKeFEVY'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
          lat: 13.0380523,
          lng: 80.21371
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 13.0380523,
        lng: 80.21371
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}
