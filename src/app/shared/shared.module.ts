import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPagesComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPageComponent,
    ContactPagesComponent,
    HomePagesComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SideBarComponent,
  ]
})
export class SharedModule { }
