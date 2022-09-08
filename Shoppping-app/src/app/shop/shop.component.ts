import { Component, OnInit } from '@angular/core';
import { ItemInterface } from '../interfaces/items';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: ItemInterface[] = [];
  collection: any = [];
  page: any;

  constructor(private dataService: DataService) { }

  // Subscribes to all products.
  getAllitems() {
    this.dataService.getAllItems().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    })
  }

  ngOnInit(): void {
    this.getAllitems();
    this.getCollectionData();
  }

  // Load the collection data.
    getCollectionData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.collection = json;
      });
  }
}
