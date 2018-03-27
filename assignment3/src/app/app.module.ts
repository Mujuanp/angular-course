import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LogLineComponent } from './log-line/log-line.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LogLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
