import {product} from "./product.model";

export type store = {
    products: product[],
    isLoggedIn: boolean,
    username: string,
}
