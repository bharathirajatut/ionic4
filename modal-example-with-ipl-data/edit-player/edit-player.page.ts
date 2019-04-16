import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.page.html',
  styleUrls: ['./edit-player.page.scss'],
})
export class EditPlayerPage implements OnInit {

  player:any
  constructor(navParams: NavParams,public viewCtrl: ModalController) {
   this.player=navParams.get('player')
  }

  ngOnInit() {
  }

  update()
  {
    this.viewCtrl.dismiss(this.player);

  }

}
