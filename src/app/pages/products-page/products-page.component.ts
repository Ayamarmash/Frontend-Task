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
  private storeSubscription: Subscription = new Subscription();

  readonly Object = Object;
  service: ApiService;
  displayedColumns: string[] = ['name', 'data'];
  products : product[] = [];
  productsToShow: product[] = [];
  pageSize = 5;
  pageSizeOptions = [5, 10, 13];
  isLoading!: boolean ;

  constructor(apiService: ApiService, private store: Store<{States: store}>) {
    this.service= apiService;
  }

  ngOnInit(){
    this.storeSubscription.add(this.store.select("States").subscribe(states=>{
      this.isLoading = states.loading;
      this.products = states.products;
    }))
    this.getProducts()
        .then(()=>this.showProducts());
  }

  async getProducts() {
    this.store.dispatch(load());
    let products = await this.service.getProducts()
      .then((data: any) => {
        return data;
      })
      .catch((err: any) => {
        console.error('Error:', err);
      });
    this.store.dispatch(setProducts({products}));
    this.store.dispatch(load());
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.productsToShow = this.products?.slice(0, this.pageSize);
  }

  showProducts(){
      this.productsToShow = this.products?.slice(0, this.pageSize);
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
