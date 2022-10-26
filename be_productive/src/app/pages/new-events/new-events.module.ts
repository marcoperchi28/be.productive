import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEventsPageRoutingModule } from './new-events-routing.module';

import { NewEventsPage } from './new-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewEventsPageRoutingModule
  ],
  declarations: [NewEventsPage]
})
export class NewEventsPageModule {}
