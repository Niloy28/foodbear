import Meal from "./Meal";

type CartDataModel = {
	meals: {
		item: Meal;
		quantity: number;
	}[];
};

export default CartDataModel;
