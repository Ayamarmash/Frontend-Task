import {createReducer, on} from "@ngrx/store";
import {login, logout} from "./actions";
import {initialStates} from "./initialStates";

const loginReducer= createReducer(initialStates,
    on(login, (state, {username})=>{
        return {
            ...state,
            username: username,
            isLoggedIn: true,
        }
    }),
    on(logout, (state)=>{
        return {
            ...state,
            username: "",
            isLoggedIn: true,
        }
    }),
)

export function Reducer(state:any, action:any){
    return loginReducer(state, action);
}
