import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhantomPageRoutingModule } from './phantom-routing.module';

import { PhantomPage } from './phantom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhantomPageRoutingModule
  ],
  declarations: [PhantomPage]
})
export class PhantomPageModule {}
