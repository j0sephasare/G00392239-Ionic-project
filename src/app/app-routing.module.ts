import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vandal-skins',
    loadChildren: () => import('./vandal-skins/vandal-skins.module').then( m => m.VandalSkinsPageModule)
  },
  {
    path: 'phantom',
    loadChildren: () => import('./phantom/phantom.module').then( m => m.PhantomPageModule)
  },
  {
    path: 'ghost',
    loadChildren: () => import('./ghost/ghost.module').then( m => m.GhostPageModule)
  },
  {
    path: 'sheriff',
    loadChildren: () => import('./sheriff/sheriff.module').then( m => m.SheriffPageModule)
  },
  {
    path: 'pheonix',
    loadChildren: () => import('./pheonix/pheonix.module').then( m => m.PheonixPageModule)
  },
  {
    path: 'jett',
    loadChildren: () => import('./jett/jett.module').then( m => m.JettPageModule)
  },
  {
    path: 'brimstone',
    loadChildren: () => import('./brimstone/brimstone.module').then( m => m.BrimstonePageModule)
  },
  {
    path: 'bind',
    loadChildren: () => import('./bind/bind.module').then( m => m.BindPageModule)
  },
  {
    path: 'haven',
    loadChildren: () => import('./haven/haven.module').then( m => m.HavenPageModule)
  },
  {
    path: 'split',
    loadChildren: () => import('./split/split.module').then( m => m.SplitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
