import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ItemInterface } from '../interfaces/items';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  refreshed = true;
  products: ItemInterface[] = [];
  results: any = '';
  p: any;

  // Creates a constructor for the given route.
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Takes a snapshot of the route s parameters.
    this.results = this.route.snapshot.paramMap.get('key');
    // Performs a search and returns the results.
    this.getSearch(this.results);
    // Determines if the route should be reused.
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  // Gets Search Results.
  getSearch(key: any): void {
    this.dataService.search(key).subscribe((data: any) => {
      if (this.refreshed && data.length > 0) {
        this.products = data.results;
        this.refreshed = false;
      } else {
        this.router.navigate(['/shop']);
        alert(`No Products with ${key} Redirecting to Shopping page`);
        console.error();
      }
      console.error();
    });
  }
}
