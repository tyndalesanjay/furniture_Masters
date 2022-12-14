import { Component, OnInit } from '@angular/core';
import { Cart } from '../interfaces/cart.interface';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Order } from '../interfaces/order.interface';
import { FormBuilder, Validators } from '@angular/forms';

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
  noItems: Boolean = false;

  orderForm = {
    customername: '',
    ordernumber: this.randomString(10),
    orderTotal: '',
    products: Array()
  }

  constructor(private cartService: CartService, private orderService: OrderService, private fb: FormBuilder) {}

  // Generate a random string.
  randomString(length: any) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  ngOnInit(): void {
    // Gets the cart items from the cart service.
    this.cartService.get_items().subscribe((data: any) => {
      this.items = data.results;
      this.cart_Length = data.length;

      if (data.length <= 0) {
        this.noItems = true
      }
      
      // this.createOrder()
      this.items.forEach((data) => {
        this.total_Price = this.total_Price + data.productID.price;
        this.orderForm.orderTotal = this.total_Price

      });
      console.error();
    });

    // Delete all records.
    setTimeout(this.deleteAll, 3600000);
  }

  // Reloads the window.
  windowReload() {
    window.location.reload()
  }

  // Deletes a cart item.
  delete_item(id: any) {
    this.cartService.delete_item(id).subscribe(() => {
    });
  }

  // Deletes all carts.
  deleteAll() {
    this.cartService.deleteAll().subscribe(() => {
      window.location.reload();
    });
  }

  // Places an order.
  createOrder() {
    this.items.forEach(item =>{
      this.orderForm.products.push(item.productID._id)
      console.error();
    })

    this.orderService.createOrder(this.orderForm).subscribe((data: any) => {
      if(data) {
        alert('Order Placed Successfully')
        this.deleteAll()
      } else {
        console.error();
        alert('Order fail to Place')
      }
    })
  }
}
