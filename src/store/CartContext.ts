import { createContext } from "react";
import CartDataModel from "../types/CartDataModel";

const CartContext = createContext<CartDataModel>({
	meals: [],
});

export default CartContext;
