import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private imagePicker: ImagePicker){

  }
  images:any[]=[]
  openImagePicker()
  {
    let options={
      maximumImagesCount:10
    }

    this.imagePicker.getPictures(options).then((results) => {
      //alert(JSON.stringify(results[0]))
      for (var i = 0; i < results.length; i++) {
        results[i]=(<any>window).Ionic.WebView.convertFileSrc(results[i])
      }
      this.images=results
    }, (err) => { });
  }
}
