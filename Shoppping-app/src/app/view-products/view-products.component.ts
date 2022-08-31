import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ItemInterface } from '../interfaces/items';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: any = []
  toggle: Boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService, private cartService: CartService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getProductbyId(id)
  }

  hideMenu(){
    this.toggle = !this.toggle
  }

  getProductbyId(id: any) {
    this.dataService.getItemsById(id).subscribe((data: any) => {
      this.products = data.data
    })
  }

  deleteProduct(id: number) {
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
