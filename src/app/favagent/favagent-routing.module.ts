import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavagentPage } from './favagent.page';

const routes: Routes = [
  {
    path: '',
    component: FavagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavagentPageRoutingModule {}
