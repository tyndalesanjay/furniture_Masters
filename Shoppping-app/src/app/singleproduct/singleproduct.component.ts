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

  addCart = this.fb.group({
    productID: ['', Validators.required],
  });

  getProductById(id: any) {
    this.dataService.getItemsById(id).subscribe((data: any) => {
      this.products = data.data;
      this.addCart.setValue({
        productID: this.products._id,
      });
      console.log(this.addCart.value);
    });
  }

  addToCart() {
    this.cartService.add_item(this.addCart.value).subscribe((data: any) => {
      if (data) {
        console.log(data);
      } else {
        alert('Please try adding the product to Cart Again');
        console.error();
        console.log();
      }
    });
    console.log();
  }
}
