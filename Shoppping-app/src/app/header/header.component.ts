import { Component, OnInit } from '@angular/core';
import { Cart } from '../interfaces/cart.interface';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: any[] = [];
  total_Price:any = 0;
  cart_Length = '';
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.get_items().subscribe((data: any) => {
      this.items = data.results;
      this.cart_Length = data.length;
      this.items.forEach(data => {
          this.total_Price = this.total_Price + data.productID.price;
        console.log('total =', this.total_Price);
      });
      // this.total_Price = this.items
      console.log(this.items);
    });
  }

  delete_item(id: any) {
    this.cartService.delete_item(id).subscribe(() => {
      alert('Book removed!');
      window.location.reload();
    });
  }

}
