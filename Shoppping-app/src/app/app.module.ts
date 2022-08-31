import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { AuthGuard } from './services/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from 'src/pipes/filter.pipe';
import { SortPipe } from 'src/pipes/sort.pipe';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingleproductComponent,
    CartComponent,
    CheckoutComponent,
    DashboardComponent,
    OrdersComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ShopComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EditAddressComponent,
    LoginComponent,
    FilterPipe,
    SortPipe,
    AdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    ListProductsComponent,
    ViewProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
