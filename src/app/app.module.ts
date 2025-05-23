import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandsComponent } from './pages/bands/bands.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandsComponent,
    TicketsComponent,
    GalleryComponent,
    HomeComponent,
    SvgIconsComponent,
    GalleryModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
