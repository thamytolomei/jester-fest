import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandsComponent } from './pages/bands/bands.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProductionComponent } from './pages/production/production.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'editions',
    component: BandsComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'production',
    component: ProductionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
