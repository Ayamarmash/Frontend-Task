import { Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {AddProductPageComponent} from "./pages/add-product-page/add-product-page.component";
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', redirectTo: '/main/products', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: MainPageComponent, children: [
      { path: 'products', component: ProductsPageComponent },
      { path: 'new-product', component: AddProductPageComponent }]
  }
];
