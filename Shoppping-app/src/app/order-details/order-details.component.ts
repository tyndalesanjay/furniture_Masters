import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Order } from '../interfaces/order.interface';
import { OrderService } from '../services/order.service';
import { ItemInterface } from '../interfaces/items';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  toggle: Boolean = true;
  orders!: Order;

  constructor(
    private orderService: OrderService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getOrderById(id);
  }

  statusForm = this.fb.group({
    status: ['', Validators.required],
  });

  hideMenu() {
    this.toggle = !this.toggle;
  }

  getOrderById(id: any) {
    this.orderService.getItemsById(id).subscribe((data: any) => {
      if (data) {
        this.orders = data.results;
        this.statusForm.setValue({
          status: this.orders.status
        })
      } else {
        console.error();
      }
    });
  }

  updateOrder(id: string) {
    this.orderService.updateItem(id, this.statusForm.value).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.router.navigate(['/admin'])
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
