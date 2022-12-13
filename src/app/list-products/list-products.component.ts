import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { ItemInterface } from '../interfaces/items';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: ItemInterface[] = []
  toggle: Boolean = false
  p:any;

  constructor(private dataService: DataService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.dataService.adminGetItems().subscribe((data: any) => {
      if(!data) {
        console.error();
      } else {
        this.products = data.data
        console.error();
      }
    })
  }

  // Hide the menu.
  hideMenu(){
    this.toggle = !this.toggle
  }

  // Deletes a product.
  deleteProduct(id: string) {
    this.dataService.deleteItem(id).subscribe((data: any) => {
      if(!data) {
        console.error();
        alert("Could not Delete Try Again")
      } else {
        alert('Product has been Deleted')
        window.location.reload()
      }
    })
  }
  
  // Logs the user out.
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'success' } });
  }

}
