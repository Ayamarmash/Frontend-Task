import { NgModule } from '@angular/core';
import {CommonModule, NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ProductsPageComponent} from "./products-page/products-page.component";
import {AddProductPageComponent} from "./add-product-page/add-product-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [ProductsPageComponent, AddProductPageComponent, LoginPageComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        NgIf,
        NgOptimizedImage,
        NgForOf,
        ReactiveFormsModule,
        NgClass,
        MatProgressBarModule,
    ]
})
export class PagesModule { }
