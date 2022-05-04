import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VandalSkinsPage } from './vandal-skins.page';

const routes: Routes = [
  {
    path: '',
    component: VandalSkinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VandalSkinsPageRoutingModule {}
