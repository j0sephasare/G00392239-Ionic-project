import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HavenPage } from './haven.page';

const routes: Routes = [
  {
    path: '',
    component: HavenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HavenPageRoutingModule {}
