import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavagentPageRoutingModule } from './favagent-routing.module';

import { FavagentPage } from './favagent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavagentPageRoutingModule
  ],
  declarations: [FavagentPage]
})
export class FavagentPageModule {}
