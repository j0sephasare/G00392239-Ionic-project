import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheriffPageRoutingModule } from './sheriff-routing.module';

import { SheriffPage } from './sheriff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheriffPageRoutingModule
  ],
  declarations: [SheriffPage]
})
export class SheriffPageModule {}
