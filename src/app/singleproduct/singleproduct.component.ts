import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ItemInterface } from '../interfaces/items';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],
})
export class SingleproductComponent implements OnInit {
  products: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private cartService: CartService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductById(id);
  }

  // Add a new cart to the product.
  addCart = this.fb.group({
    productID: ['', Validators.required],
  });

  // Adds a product to the cart.
  getProductById(id: any) {
    this.dataService.getItemsById(id).subscribe((data: any) => {
      this.products = data.data;
      this.addCart.setValue({
        productID: this.products._id,
      });
    });
  }

  // Adds the product to the cart
  addToCart() {
    this.cartService.add_item(this.addCart.value).subscribe((data: any) => {
      if (data) {
        console.log("Data Added To Cart");
      } else {
        alert('Please try adding the product to Cart Again');
        console.error();
      }
    });
    console.log();
  }
}
