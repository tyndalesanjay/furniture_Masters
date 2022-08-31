import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ItemInterface } from '../interfaces/items';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  product: any = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  updateProduct = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
  });

  getProduct(id: any) {
    this.dataService.getItemsById(id).subscribe((data: any) => {
      this.product = data.data;
      console.log(this.product);
      this.updateProduct.setValue({
        name: this.product.name,
        imageUrl: this.product.imageUrl,
        description: this.product.description,
        category: this.product.category,
        quantity: this.product.quantity,
        price: this.product.price,
      });
    });
  }

  updateitem(id: any) {
    this.dataService
      .updateItem(id, this.updateProduct.value)
      .subscribe((data: any) => {
        if (!data) {
          console.error();
          alert('Error');
        } else {
          alert('Product Updated Successfully')
          this.router.navigate(['/admin'])
        }
      });
  }
}
