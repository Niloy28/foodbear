import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartDataModel from "../types/CartDataModel";
import Meal from "../types/Meal";

interface CartContextProviderProps {
	children: React.ReactNode;
}

enum CartActionType {
	"ADD",
	"REMOVE",
}

interface CartAction {
	type: CartActionType;
	payload: Meal;
}

interface CartState {
	orders: {
		item: Meal;
		quantity: number;
	}[];
	totalPrice: number;
}

const initialState: CartState = { orders: [], totalPrice: 0 };

const cartReducer = (state: CartState, action: CartAction) => {
	const { type, payload } = action;

	const newState: CartState = {
		orders: [...state.orders],
		totalPrice: state.totalPrice + payload.price,
	};

	switch (type) {
		case CartActionType.ADD:
			let order = state.orders.find((order) => order.item === payload);
			if (order) {
				newState.orders.find((order) => order.item === payload)!.quantity++;
			} else {
				newState.orders.push({ item: payload, quantity: 1 });
			}

			return newState;

		case CartActionType.REMOVE:
			newState.totalPrice -= payload.price;
			const newAmount = --newState.orders.find(
				(order) => order.item === payload
			)!.quantity;
			if (newAmount === 0) {
				newState.orders = newState.orders.filter(
					(order) => order.item !== payload
				);
			}
			return newState;

		default:
			return state;
	}
};

const CartContextProvider: React.FC<CartContextProviderProps> = (props) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

	const addItemHandler = (meal: Meal) => {
		cartDispatch({ type: CartActionType.ADD, payload: meal });
	};
	const removeItemHandler = (meal: Meal) => {
		cartDispatch({ type: CartActionType.REMOVE, payload: meal });
	};

	const cartCtxValue: CartDataModel = {
		orders: cartState.orders,
		totalPrice: cartState.totalPrice,
		addItemToCart: addItemHandler,
		removeItemFromCart: removeItemHandler,
	};

	return (
		<CartContext.Provider value={cartCtxValue}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
