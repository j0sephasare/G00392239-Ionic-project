import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VandalSkinsPageRoutingModule } from './vandal-skins-routing.module';

import { VandalSkinsPage } from './vandal-skins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VandalSkinsPageRoutingModule
  ],
  declarations: [VandalSkinsPage]
})
export class VandalSkinsPageModule {}
