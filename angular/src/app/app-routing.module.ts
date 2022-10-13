import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturenotavailableComponent } from './Main/featurenotavailable/featurenotavailable.component';
import { HomeComponent } from './Main/home/home.component';
import { Page404Component } from './Main/page404/page404.component';
import { LoginComponent } from './Main/pages/login/login.component';
import { GestionProfilComponent } from './Main/pages/profil/gestion-profil/gestion-profil.component';
import { SubscribeComponent } from './Main/pages/subscribe/subscribe.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'demo', 
  //   loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  // },
  // {
  //   path: 'exo', 
  //   loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule)
  // },
  {path: 'login', component: LoginComponent},
  {path: 'featureNot', component: FeaturenotavailableComponent},
  {path: 'mon-espace', component: GestionProfilComponent},
  {path: 'subscription', component: SubscribeComponent},



  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
