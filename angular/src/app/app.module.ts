import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NavbarComponent } from './Main/navbar/navbar.component';
import { HomeComponent } from './Main/home/home.component';
import { Page404Component } from './Main/page404/page404.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule }
  from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MatRippleModule } from '@angular/material/core';
import { CustomrippleDirective } from './Main/navbar/directives/customripple.directive'
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { LoginComponent } from './Main/pages/login/login.component';
import { KeyFilterModule } from 'primeng/keyfilter'
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { FeaturenotavailableComponent } from './Main/featurenotavailable/featurenotavailable.component';
import { SkeletonModule } from 'primeng/skeleton';
import { GestionProfilComponent } from './Main/pages/profil/gestion-profil/gestion-profil.component';
import { SubscribeComponent } from './Main/pages/subscribe/subscribe.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    CustomrippleDirective,
    LoginComponent,
    FeaturenotavailableComponent,
    GestionProfilComponent,
    SubscribeComponent,


  ],
  imports: [
    BrowserModule,
    RippleModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    MenubarModule,
    InputTextModule,
    MatRippleModule,
    AutoCompleteModule,
    FormsModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    KeyFilterModule,
    PasswordModule,
    CheckboxModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    SkeletonModule,
    RadioButtonModule,
    InputMaskModule,
    CalendarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
