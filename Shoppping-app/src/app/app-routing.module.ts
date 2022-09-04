import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SearchComponent } from './search/search.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'singleproduct/:id', component: SingleproductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile-details/:id', component: ProfileDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search/:key', component: SearchComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AuthGuard] },
  { path: 'product-list', component: ListProductsComponent, canActivate: [AuthGuard] },
  { path: 'view-product/:id', component: ViewProductsComponent, canActivate: [AuthGuard]},
  { path: 'order', component: OrdersComponent, canActivate: [AuthGuard]},
  { path: 'view-order/:id', component: OrderDetailsComponent },
  { path: '**', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
