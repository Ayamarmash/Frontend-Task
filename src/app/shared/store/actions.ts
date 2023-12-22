import {createAction, props} from "@ngrx/store";
import {Product} from "../../models/product.model";
export const setProducts = createAction(
    'setProducts',
    props<{ products: Product[] }>())
export const logIn = createAction(
    'logIn',
    props<{ username: string }>())
export const logOut = createAction(
    'logOut')
