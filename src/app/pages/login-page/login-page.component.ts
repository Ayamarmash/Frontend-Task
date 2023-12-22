import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {login} from "../../store/actions";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent{
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<{States: any}>) {}

  onSubmit() {
    // First check if the form values are valid (according to the validators that were provided later)
    if (this.loginForm?.valid) {
      // If valid, dispatch logIn Action to store the username, so all components can reach it
      let username = this.loginForm.value.username
      // @ts-ignore
      this.store.dispatch(login({username}))
      // after login successfully, navigate to the products page
      this.router.navigate(['main/products'])
    } else alert("Check values")
  }
}
