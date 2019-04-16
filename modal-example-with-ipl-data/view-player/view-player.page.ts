import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.page.html',
  styleUrls: ['./view-player.page.scss'],
})
export class ViewPlayerPage implements OnInit {
  player:any
  constructor(navParams: NavParams,public viewCtrl: ModalController) {
   this.player=navParams.get('player')
  }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
