import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  toggle: Boolean = true;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, public auth: AuthService) { }



  ngOnInit(): void {
  }

  hideMenu() {
    this.toggle = !this.toggle
  }

  addProduct = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required]
  })

  createProduct() {
    this.dataService.createItem(this.addProduct.value).subscribe((data: any) => {
      if(!data) {
        console.error();
      } else {
        alert('Added Product Successfully');
        this.router.navigate(['/admin'])
        console.log(data);
      }
    })
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'success' } });
  }

}
