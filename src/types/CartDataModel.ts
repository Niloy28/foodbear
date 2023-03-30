import Meal from "./Meal";

type CartDataModel = {
	orders: {
		item: Meal;
		quantity: number;
	}[];
	totalPrice: number;
	addItemToCart: (meal: Meal) => void;
	removeItemFromCart: (meal: Meal) => void;
	emptyCart: () => void;
};

export default CartDataModel;
