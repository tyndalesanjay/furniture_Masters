import { Component, OnInit } from '@angular/core';
import { Cart } from '../interfaces/cart.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart_Length = '';
  items: any[] = [];
  total_Price: any = 0;
  p: any;

  constructor(private cart_service: CartService) {}

  ngOnInit(): void {
    this.cart_service.get_items().subscribe((data: any) => {
      this.items = data.results;
      this.cart_Length = data.length;
      this.items.forEach((data) => {
        this.total_Price = this.total_Price + data.productID.price;
        console.log('total =', this.total_Price);
      });
      // this.total_Price = this.items
      console.log(this.items);
    });
  }

  delete_item(id: any) {
    this.cart_service.delete_item(id).subscribe(() => {
      alert('Book removed!');
      window.location.reload();
    });
  }

  deleteAll() {
    this.cart_service.deleteAll().subscribe(() => {
      alert('Your order has been Placed');
      window.location.reload();
    });
  }
}
