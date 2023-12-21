import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent{
  isLoading = false;
  years = [2019,2020,2021,2022,2023];
  newProductForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    year: ['', Validators.required],
    price: ['', Validators.required],
    cpu: [''],
    hardDiskSize: [''],
  })

  constructor(private formBuilder: FormBuilder, private service: ApiService) {}
  onSubmit() {
    if (this.newProductForm.valid){
      // Change the loading state to true, to start the loading progress bar
      this.isLoading = true;

      // Prepare the product obj that we will send in the API request
      let product = {
      name: this.newProductForm.value.name,
      data: {
        "year": this.newProductForm.value.year,
        "price": this.newProductForm.value.price,
        "CPU model": this.newProductForm.value.cpu,
        "Hard disk size": this.newProductForm.value.hardDiskSize
      }
    }
    // Call addNewProduct that sends a POST request and takes a new product obj
    this.service.addNewProduct(product)
        .then(()=>{
          // Change the loading state to false, to stop the loading progress bar
          this.isLoading = false;
          this.newProductForm.reset();
        })
    }
  }
}
