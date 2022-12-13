import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { Order } from '../interfaces/order.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  toggle: Boolean = true;
  p: any;

  constructor(public auth: AuthService, private orderService: OrderService, private router: Router) {}

  // Hide the menu.
  hideMenu() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
    // Subscribes to orders.
    this.orderService.getOrders().subscribe((data: any) => {
      if (data) {
        this.orders = data.results;
      } else {
        console.error();
      }
    });
  }

  // Logs the user out.
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'success' } });
  }
}
