import {createAction, props} from "@ngrx/store";
import {Product} from "../../models/product.model";

export const login = createAction(
    'login',
    props<{ username: string }>())
export const logout = createAction(
    'logOut')
