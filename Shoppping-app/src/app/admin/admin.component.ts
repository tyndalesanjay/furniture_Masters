import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ItemInterface } from '../interfaces/items';
import { Order } from '../interfaces/order.interface';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  productLength: any;
  orderLength: any;
  contactLength: any;
  products: ItemInterface[] = [];
  orders: Order[] = [];
  toggle: Boolean = true;
  p: any;
  
  constructor(
    private dataService: DataService,
    public auth: AuthService,
    private orderService: OrderService,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Gets all products and logs them.
    this.dataService.adminGetItems().subscribe((data: any) => {
      this.products = data.data;
      this.productLength = data.data.length;
      console.log(this.products);
    });

    // Subscribes to orders.
    this.orderService.getOrders().subscribe((data: any) => {
      if(!data) {
        console.error();
      } else {
        this.orders = data.results
        this.orderLength = data.length
        console.log(this.orders);
      }
    });

    this.contactService.getAll().subscribe((data: any) => {
      this.contactLength = data.length
    })
  }

  // Hide the menu.
  hideMenu() {
    this.toggle = !this.toggle;
  }

  // Deletes a product.
  deleteProduct(id: string) {
    this.dataService.deleteItem(id).subscribe((data: any) => {
      if (!data) {
        console.error();
        alert('Could not Delete Try Again');
      } else {
        alert('Product has been Deleted');
        window.location.reload();
      }
    });
  }

  deleteOrder(id: string) {
    this.orderService.deleteItem(id).subscribe((data: any) => {
      if (data) {
        alert("Order Deleted Successfully")
        window.location.reload();
      }  else {
        alert('Order was Not Deleted... Try Again');
      }
    })
  }

  // Logs the user out.
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'success' } });
  }
}
