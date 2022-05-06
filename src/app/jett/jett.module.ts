import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JettPageRoutingModule } from './jett-routing.module';

import { JettPage } from './jett.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JettPageRoutingModule
  ],
  declarations: [JettPage]
})
export class JettPageModule {}
