import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared';
import { FooterComponent } from './shared';


import {TweetService,AuthenticationService,FollowService} from './core'
import {HttpClientModule} from '@angular/common/http'
import {AuthenticationModule} from './authentication/authentication.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule,
    AuthenticationModule
  ],
  providers: [TweetService,AuthenticationService,FollowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
