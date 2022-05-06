import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JettPage } from './jett.page';

const routes: Routes = [
  {
    path: '',
    component: JettPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JettPageRoutingModule {}
