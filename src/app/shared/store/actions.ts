import {createAction, props} from "@ngrx/store";
import {product} from "../../models/product.model";
export const setProducts = createAction(
    'setProducts',
    props<{ products: product[] }>())
export const logIn = createAction(
    'logIn',
    props<{ username: string }>())
export const logOut = createAction(
    'logOut')
