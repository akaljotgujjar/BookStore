import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TextbooksComponent } from './textbooks/textbooks.component';
import { RentComponent } from './rent/rent.component';
import { routerModule } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { SharedComponentModule } from './shared-component/shared-component.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TextbooksComponent,
    RentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SharedComponentModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
