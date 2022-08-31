import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ItemInterface } from '../interfaces/items';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productLength =''
  products:ItemInterface[] = []
  toggle: Boolean = true
  p:any;

  constructor(private dataService: DataService, public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.adminGetItems().subscribe((data: any) => {
      this.products = data.data
      this.productLength = data.data.length
      console.log(this.products);
      
    })
  }

  hideMenu(){
    this.toggle = !this.toggle
  }

  deleteProduct(id: number) {
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

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login'], {queryParams: {loggedOut: 'success'}});
  }

}
