import {createReducer, on} from "@ngrx/store";
import {setProducts, load} from "./actions";
import {States} from "./store";

const changeLoadingState= createReducer(States,
    on(load, (state)=>{
        return {
            ...state,
            loading: !state.loading,
        }
    }),
    on(setProducts, (state, {products})=>{
        return {
            ...state,
            products: products,
        }
    })
)

export function Reducer(state:any, action:any){
    return changeLoadingState(state, action);
}
