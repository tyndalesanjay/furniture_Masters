import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.adminGetItems().subscribe((data: any) => {
      if(!data) {
        console.error();
        
      } else {
        this.products = data.data
      }
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

}
