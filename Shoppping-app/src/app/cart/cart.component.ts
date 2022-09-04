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

  orderForm = {
    customername: '',
    ordernumber: this.randomString(10),
    orderTotal: '',
    products: Array()
  }

  constructor(private cartService: CartService, private orderService: OrderService, private fb: FormBuilder) {}

  randomString(length: any) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  ngOnInit(): void {
    this.cartService.get_items().subscribe((data: any) => {
      this.items = data.results;
      this.cart_Length = data.length;
      
      // this.createOrder()
      this.items.forEach((data) => {
        this.total_Price = this.total_Price + data.productID.price;
        this.orderForm.orderTotal = this.total_Price
        console.log('total =', this.total_Price);

      });
      console.error();
    });

    console.log('OrderForm responds', this.orderForm);

  }

  delete_item(id: any) {
    this.cartService.delete_item(id).subscribe(() => {
      alert('Product removed!');
      window.location.reload();
    });
  }

  deleteAll() {
    this.cartService.deleteAll().subscribe(() => {
      window.location.reload();
    });
  }

  createOrder() {
    this.items.forEach(item =>{
      this.orderForm.products.push(item.productID._id)
      console.error();
    })

    this.orderService.createOrder(this.orderForm).subscribe((data: any) => {
      if(data) {
        alert('Order Placed Successfully')
        console.log(data);
        // console.error();
        this.deleteAll()
      } else {
        console.error();
        alert('Order fail to Place')
        
      }
    })
  }
}
