import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonTextAvatar } from 'ionic-text-avatar';

import { HomePage } from './home.page';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,AvatarComponent,CalendarComponent]
})
export class HomePageModule {}
