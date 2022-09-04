import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { Order } from '../interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  toggle: Boolean = true;
  p: any;

  constructor(public auth: AuthService, private orderService: OrderService) {}

  // Hide the menu.
  hideMenu() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data: any) => {
      if (data) {
        this.orders = data.results;
        console.log(this.orders);
        console.error();
      } else {
        console.error();
      }
    });
  }
}
