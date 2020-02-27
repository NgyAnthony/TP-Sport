import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SportDetailsComponent } from './sport-details/sport-details.component';
import { MatDividerModule } from '@angular/material';
import { SafePipe } from './sport-details/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SportDetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
