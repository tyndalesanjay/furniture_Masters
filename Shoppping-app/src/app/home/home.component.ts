import { Component, OnInit } from '@angular/core';
import { ItemInterface } from '../interfaces/items';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  addCart: any = '';
  products: ItemInterface[] = [];
  refreshed = true;

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}

  getAllitems() {
    this.dataService.getAllItems().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
    this.getAllitems();
  }
  //Slider settings
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
}
