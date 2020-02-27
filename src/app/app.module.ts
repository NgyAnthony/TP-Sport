import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { SportDetailsComponent } from './sport-details/sport-details.component';
import { MatDividerModule } from '@angular/material';
import { SafePipe } from './sport-details/safe.pipe';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SportlistsComponent } from './sportlists/sportlists.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { SportsliderComponent } from './sportslider/sportslider.component';

@NgModule({
  declarations: [
    AppComponent,
    SportDetailsComponent,
    SafePipe,
    HeaderComponent,
    FooterComponent,
    SportlistsComponent,
    SportsliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    MatCarouselModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
