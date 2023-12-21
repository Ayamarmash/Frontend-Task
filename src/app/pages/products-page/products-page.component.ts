import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {PageEvent} from "@angular/material/paginator";
import {product} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {store} from "../../models/store.model";
import {load, setProducts} from "../../shared/store/actions";
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
  products : product[] = [];
  productsToShow: product[] = [];
  pageSize = 5;
  pageSizeOptions = [5, 10, 13];
  isLoading = false ;

  constructor(private service: ApiService, private store: Store<{States: store}>) {}

  ngOnInit(){
    // Subscribe to get the products whenever it's value changes in the store
    this.storeSubscription.add(this.store.select("States").subscribe(states=>{
      this.products = states.products;
    }))

    // Get the Products then show them on the table
    this.getProducts().then(()=>this.showProducts());
  }

  async getProducts() {
    // Change the loading state to true, to start the loading progress bar
    this.isLoading = true;

    // Call getProducts that sends a GET request and returns the products array, and store it in products variable
    let products = await this.service.getProducts()
      .then((data: any) => {
        return data;
      })
      .catch((err: any) => {
        console.error('Error:', err);
      });

    // Now dispatch setProducts action to set the products array in the store
    // This step for the purpose of applying the ngrx, and would be helpful if we have another page that uses the products data
    this.store.dispatch(setProducts({products}));

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
    // Unsubscribe all subscriptions
    this.storeSubscription.unsubscribe();
  }
}
