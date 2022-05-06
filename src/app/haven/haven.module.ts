import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HavenPageRoutingModule } from './haven-routing.module';

import { HavenPage } from './haven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HavenPageRoutingModule
  ],
  declarations: [HavenPage]
})
export class HavenPageModule {}
