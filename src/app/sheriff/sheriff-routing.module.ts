import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheriffPage } from './sheriff.page';

const routes: Routes = [
  {
    path: '',
    component: SheriffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheriffPageRoutingModule {}
