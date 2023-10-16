import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { CardComponent } from './components/card/card.component';
import { TwoCardComponent } from './components/two-card/two-card.component';
import { HomeComponent } from './pages/home/home.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    CardComponent,
    TwoCardComponent,
    HomeComponent,
    CardDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
