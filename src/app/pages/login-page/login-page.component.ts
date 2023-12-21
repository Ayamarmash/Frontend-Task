import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {store} from "../../models/store.model";
import {logIn} from "../../shared/store/actions";

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
  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<{States: store}>) {
  }

  onSubmit() {
    if (this.loginForm?.valid) {
      let username = this.loginForm.value.username
      // @ts-ignore
      this.store.dispatch(logIn({username}))
      this.router.navigate(['main/products'])
    } else alert("Check values")
  }
}
