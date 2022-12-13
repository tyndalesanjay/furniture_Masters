import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SearchComponent } from './search/search.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'singleproduct/:id', component: SingleproductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search/:key', component: SearchComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'view-order/:id', component: OrderDetailsComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]},
  { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AuthGuard]},
  { path: 'product-list', component: ListProductsComponent, canActivate: [AuthGuard]},
  { path: 'view-product/:id', component: ViewProductsComponent, canActivate: [AuthGuard]},
  { path: 'order', component: OrdersComponent, canActivate: [AuthGuard]},
  { path: 'message-list', component: ContactListComponent, canActivate: [AuthGuard]},
  { path: 'view-message/:id', component: ViewContactComponent,  canActivate: [AuthGuard]},
  { path: 'user-list', component: UserListComponent,  canActivate: [AuthGuard]},
  { path: 'view-user/:id', component: ViewUserComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
