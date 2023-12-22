import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'https://api.restful-api.dev';

  constructor() { }
  async getProducts() {
    const res = await fetch(`${this.baseURL}/objects`)
      .then(res=>{
        return res.json();
      })
      .catch(err=>{
        return err;
      })
    return await res;
  }

  async addNewProduct(product:any){
    const res = await fetch(`${this.baseURL}/objects`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(res=> {
        return res.json()
      });
    return await res;
  }
}
