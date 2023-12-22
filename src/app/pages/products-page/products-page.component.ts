import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {PageEvent} from "@angular/material/paginator";
import {Product} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit, OnDestroy{
  readonly Object = Object;
  storeSubscription: Subscription = new Subscription();
  displayedColumns: string[] = ['name', 'data'];
  products : Product[] = [];
  productsToShow: Product[] = [];
  pageSize = 5;
  pageSizeOptions = [5, 10, 15];
  isLoading = false ;
  username = "";
  constructor(private service: ApiService, private store: Store<{States: any}>) {}

  ngOnInit(){
    // Subscribe to get the username
    this.storeSubscription.add(this.store.select("States").subscribe(states=>{
      this.username = states.username;
    }))
    // Get the Products then show them in the table
    this.getProducts().then(()=>this.showProducts());
  }

  async getProducts() {
    // Change the loading state to true, to start the loading progress bar
    this.isLoading = true;

    // Call getProducts that sends a GET request and returns the products array, and store it in products variable
    this.products = await this.service.getProducts()
      .then((data: any) => {
        return data;
      })
      .catch((err: any) => {
        console.error('Error:', err);
      });
    // Change the loading state to false
    this.isLoading = false;
  }

  onPageChange(event: PageEvent) {
    // Change the page size according to the current selected page size
    this.pageSize = event.pageSize;

    // Calculate the start & end index for the current shown products
    let startIndex = event.pageIndex * this.pageSize;
    let endIndex = startIndex + this.pageSize;

    // Change the Shown products to match the current page and current page size
    this.showProducts(startIndex, endIndex);
  }

  showProducts(startIndex = 0, endIndex = this.pageSize){
    this.productsToShow = this.products?.slice(startIndex, endIndex);
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
