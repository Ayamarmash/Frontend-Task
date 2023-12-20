import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {routes} from "./app.routes";
import {PagesModule} from "./pages/pages.module";
import {StoreModule} from "@ngrx/store";
import {Reducer} from "./shared/store/reducers";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        PagesModule,
        [RouterModule.forRoot(routes)],
        StoreModule.forRoot({States: Reducer})
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
