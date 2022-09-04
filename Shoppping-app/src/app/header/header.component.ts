import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../interfaces/cart.interface';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: any[] = [];
  total_Price:any = 0;
  cart_Length = '';
  search = '';
  
  constructor(private cartService: CartService, private dataService: DataService, private router: Router, private fb: FormBuilder) { }

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

  searchForm = this.fb.group({
    search: ['', Validators.required]
  })

  searchProducts(): void{
    if (this.search === '') {
      this.router.navigate([`/shop`])
      alert('No Movies Found')
    } else {
      this.router.navigate([`/search/${this.search}`])
      console.error();
    }
  }

  delete_item(id: any) {
    this.cartService.delete_item(id).subscribe(() => {
      alert('Item removed!');
      window.location.reload();
    });
  }



}
