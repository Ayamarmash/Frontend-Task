import {createAction, props} from "@ngrx/store";
import {product} from "../../models/product.model";

export const load = createAction('load' )
export const setProducts = createAction(
    'setProducts',
    props<{ products: product[] }>())
