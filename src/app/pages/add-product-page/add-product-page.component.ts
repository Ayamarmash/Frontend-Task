import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent{
  private storeSubscription: Subscription = new Subscription();
  isLoading = false;
  years = [2019,2020,2021,2022,2023];
  newProductForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    year: ['', Validators.required],
    price: ['', Validators.required],
    cpu: ['', Validators.required],
    hardDiskSize: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private service: ApiService) {}
  onSubmit() {
    if (this.newProductForm.valid){
      this.isLoading = !this.isLoading;
      let product = {
      name: this.newProductForm.value.name,
      data: {
        "year": this.newProductForm.value.year,
        "price": this.newProductForm.value.price,
        "CPU model": this.newProductForm.value.cpu,
        "Hard disk size": this.newProductForm.value.hardDiskSize
      }
    }
    this.service.addNewProduct(product)
        .then(()=>{
          this.isLoading = !this.isLoading;
          this.newProductForm.reset();
        })
    }
  }
}
