import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrimstonePage } from './brimstone.page';

const routes: Routes = [
  {
    path: '',
    component: BrimstonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrimstonePageRoutingModule {}
