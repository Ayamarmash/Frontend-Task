import {createReducer, on} from "@ngrx/store";
import {logIn, logOut, setProducts} from "./actions";
import {States} from "./store";

const changeLoadingState= createReducer(States,
    on(setProducts, (state, {products})=>{
        return {
            ...state,
            products: products,
        }
    }),
    on(logIn, (state, {username})=>{
        console.log(username)
        return {
            ...state,
            username: username,
            isLoggedIn: true,
        }
    }),
    on(logOut, (state)=>{
        return {
            ...state,
            username: "",
            isLoggedIn: true,
        }
    }),
)

export function Reducer(state:any, action:any){
    return changeLoadingState(state, action);
}
