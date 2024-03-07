import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePagesComponent,
    AboutPageComponent,
    ContactPagesComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
