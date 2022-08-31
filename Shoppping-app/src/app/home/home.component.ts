import { Component, OnInit } from '@angular/core';
import { ItemInterface } from '../interfaces/items';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  addCart: any = '';
  products: ItemInterface[] = [];
  refreshed = true;

  constructor(private dataService: DataService,
              private activatedroute: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private fb: FormBuilder
  ) { }

  addtoCart = this.fb.group ({
    productID: ['', Validators.required],
  });

  getAllitems() {
    this.dataService.getAllItems().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    })
  }

  getProductbyId(id: any) {
    this.dataService.getItemsById(id).subscribe((data: any) => {
      this.products = data.data
      console.log(this.products);
    })
  }

  getItembyId(id: any) {
    this.dataService.getItemsById(id).subscribe((data: any) => {
      this.products = data.data;
      this.addtoCart.setValue({productID: this.products})
      console.log(this.products);
      this.refreshed = false;
    })
    console.log(this.products)
  }

  addItem() {
    this.cartService.add_item(this.addtoCart.value).subscribe((data) => {
      alert("Your item has been added successfully");
      console.log(data);
    })
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    this.getAllitems();
    this.getItembyId(this.activatedroute.snapshot.paramMap.get('id'));
  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}
