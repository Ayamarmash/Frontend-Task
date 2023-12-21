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
import {RouterLink, RouterOutlet} from "@angular/router";
import {NavbarComponentComponent} from "../components/navbar-component/navbar-component.component";
import {MainPageComponent} from "./main-page/main-page.component";

@NgModule({
  declarations: [ProductsPageComponent, AddProductPageComponent, LoginPageComponent, MainPageComponent],
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
        RouterLink,
        NavbarComponentComponent,
        RouterOutlet
    ]
})
export class PagesModule { }
