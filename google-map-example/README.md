## Ionic 4 Google Map Example using Native Plugin

Get Step by step implementation of Ionic 4 Google Map plugin example using the below link.

coming soon....

<b>Preview of Android.</b>
<p>
<img src="https://github.com/bharathirajatut/ionic4/raw/master/google-map-example/sc1.jpg" height="450px">
</p>
<br>

## Downnload APK

Get the APK and test it on your Android Device.

<a href="https://github.com/bharathirajatut/ionic4/raw/master/google-map-example/app-debug.apk">APK</a>

## Tested Device

Moto G4 Plus

You can download this apk and test it on your device. This apk is not harmful and it is not stealing any info. 
If you wanna try, please download install on your device. And you can try this without any worries.


## How to use this plugin?

### Step1.

Install Google Map plugin

```
ionic cordova plugin add cordova-plugin-googlemaps
npm install --save @ionic-native/google-maps@latest
```

### Step2:

Get your google map key using below link.

https://console.cloud.google.com

Add API Keys to config.xml:
```
<widget ...>
  ...
  <preference name="GOOGLE_MAPS_ANDROID_API_KEY" value="(api key)" />
  <preference name="GOOGLE_MAPS_IOS_API_KEY" value="(api key)" />
  ...
</widget>
```

### Step3:

Import google map to your <b>app.module.ts</b> file.
```
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
```

### Step4:

Get the google map implemented code using the <b>home.html, home.ts and home.scss</b> file

### Step5:

Generated apk and deploy using below command.

```
ionic cordova platform add android
ionic cordova run android --aot
```
Reference: https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md
