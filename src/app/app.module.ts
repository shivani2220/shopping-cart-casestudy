import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    LeftMenuComponent,
    ItemsListComponent,
    HomeComponent,
    CartComponent,
    EmptyCartComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
