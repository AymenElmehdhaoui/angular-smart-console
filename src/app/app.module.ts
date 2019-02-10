import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {NgxSmartConsoleModule} from 'ngx-smart-console';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSmartConsoleModule.forRoot({env: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
