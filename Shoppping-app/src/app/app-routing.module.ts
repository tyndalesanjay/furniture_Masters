import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
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
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'singleproduct/:id', component: SingleproductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'profile-details/:id', component: ProfileDetailsComponent },
  { path: 'address', component: AddressComponent },
  { path: 'edit-address', component: EditAddressComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AuthGuard] },
  { path: 'product-list', component: ListProductsComponent, canActivate: [AuthGuard] },
  { path: 'view-product/:id', component: ViewProductsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
