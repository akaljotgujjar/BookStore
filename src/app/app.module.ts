import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { routerModule } from './routes';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { SharedComponentModule } from './shared-component/shared-component.module';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedServiceModule } from '../shared-service/shared-service.module';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ToastModule } from './toast/toast.module';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { BookCreateComponent } from './home/book-create/book-create.component';
import { BookEditComponent } from './home/book-edit/book-edit.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    CheckoutComponent,
    ShoppingcartComponent,
    BookCreateComponent,
    BookEditComponent,
    UserComponent,
    UserCreateComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SharedComponentModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedServiceModule,
    FormsModule,
    MaterialDesignModule,
    ToastModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
