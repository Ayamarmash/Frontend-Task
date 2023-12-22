import {Product} from "./product.model";

export type store = {
    products: Product[],
    isLoggedIn: boolean,
    username: string,
}
