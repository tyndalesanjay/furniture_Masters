import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ItemInterface } from '../interfaces/items';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: any = []
  toggle: Boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService, private cartService: CartService, public auth: AuthService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getProductById(id)
  }

  // Hide the menu.
  hideMenu(){
    this.toggle = !this.toggle
  }

  // Get products by id.
  getProductById(id: any) {
    this.dataService.getItemsById(id).subscribe((data: any) => {
      this.products = data.data
      console.log(data);
      
    })
  }

  // Delete a product
  deleteProduct(id: string) {
    this.dataService.deleteItem(id).subscribe((data: any) => {
      if(!data) {
        console.error();
        alert("Could not Delete Try Again")
      } else {
        alert('Product has been Deleted')
        this.router.navigate(['/product-list'])
      }
    })
  }

}
