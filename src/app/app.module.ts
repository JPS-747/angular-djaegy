import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgxAdminLteModule } from 'ngx-admin-lte';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgxAdminLteModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
