import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhantomPage } from './phantom.page';

const routes: Routes = [
  {
    path: '',
    component: PhantomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhantomPageRoutingModule {}
