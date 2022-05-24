import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  ModalModule,
  ModalService,
  PlaceholderModule,
  PlaceholderService,
  UIShellModule,
} from 'carbon-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './dialog/modal/modal.component';
import { OpenerComponent } from './dialog/opener/opener.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ModalComponent, OpenerComponent],
  imports: [BrowserModule, AppRoutingModule, UIShellModule, PlaceholderModule, ModalModule],
  providers: [ModalService, PlaceholderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
