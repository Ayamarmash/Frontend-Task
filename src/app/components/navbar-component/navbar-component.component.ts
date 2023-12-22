import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Store} from "@ngrx/store";
import {logout} from "../../store/actions";

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {
  constructor(private store: Store<{States: any}>) {
  }
  onLogoutClicked() {
    this.store.dispatch(logout())
  }
}
