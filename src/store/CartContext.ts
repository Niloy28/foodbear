import { createContext } from "react";
import CartDataModel from "../types/CartDataModel";

const defaultValue: CartDataModel = {
	orders: [],
	totalPrice: 0,
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	emptyCart: () => {},
};

const CartContext = createContext<CartDataModel>(defaultValue);

export default CartContext;
