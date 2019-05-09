import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewPlayerPage } from '../view-player/view-player.page';
import { EditPlayerPage } from '../edit-player/edit-player.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalController: ModalController) {

  }

  playersList:any[]=[{
    name:'MS Dhoni',image:'https://iplstatic.s3.amazonaws.com/players/284/1.png',role:"Wicketkeeper batsman",
    batting_style:"Right-handed",
    bowling_style:"Right-arm medium",
    nationality:"Indian",
    matches:183,
    runs:4246,
    fifties:22,
    fours:287,
    sixes:196
  },
  {
    name:'Kedar Jadhav',image:'https://iplstatic.s3.amazonaws.com/players/284/297.png',role:"Batsman",
  batting_style:"Right-handed",
  bowling_style:"Right-arm off-spin",
  nationality:"Indian",
  matches:73,
  runs:1052,
  fifties:4,
  fours:90,
  sixes:37
},
{
  name:'Dwayne Bravo',image:'https://iplstatic.s3.amazonaws.com/players/284/25.png',role:"All-rounder",
batting_style:"Right-handed",
bowling_style:"Right-arm medium fast",
nationality:"West Indian",
matches:126,
runs:1442,
fifties:5,
fours:114,
sixes:60
}]

async openModal(player) {
  const modal = await this.modalController.create({
    component: ViewPlayerPage,
    componentProps: { player: player }
  });
  return await modal.present();
}

async editModal(player,index) {
  const modal = await this.modalController.create({
    component: EditPlayerPage,
    componentProps: { player: player }
  });
  modal.onDidDismiss().then(data=>{
    this.playersList[index]=data.data
  })
  return await modal.present();
}

/*
 {
    name:'',image:'',role:"",
  batting_style:"",
  bowling_style:"",
  nationality:"",
  matches:,
  runs:,
  fifties:,
  fours:,
  sixes:
}
*/
}
