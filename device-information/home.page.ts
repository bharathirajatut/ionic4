import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private device: Device) { }

  items:any[];

  getInfo()
  {
    let items=[
{key:'model',value: this.device.model},
{key:'manufacturer',value: this.device.manufacturer},
{key:'version',value: this.device.version},
{key:'platform',value: this.device.platform}
];

this.items=items;
  }
}
