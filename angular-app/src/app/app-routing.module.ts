import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'auth', loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'packages', loadChildren: './package/package.module#PackageModule'
  },
  {
    path: 'exchange', loadChildren: './exchange/exchange.module#ExchangeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
