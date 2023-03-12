import React, { useContext } from "react";
import Meal from "../../types/Meal";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";

import styles from "../../styles/Meal/MealItem.module.css";

const MealItem: React.FC<Meal> = (props) => {
	const cartCtx = useContext(CartContext);

	const addMealItemHandler = () => {
		cartCtx.addItemToCart(props);
	};

	const removeMealItemHandler = () => {
		cartCtx.removeItemFromCart(props);
	};

	return (
		<li className={styles["meal-item"]}>
			<div className={styles["meal-text"]}>
				<h3>{props.name}</h3>
				<section className={styles["meal-description"]}>
					{props.description}
				</section>
				<div className={styles["meal-price"]}>${props.price.toFixed(2)}</div>
			</div>
			<div className={styles["meal-form"]}>
				<MealItemForm
					mealCount={
						cartCtx.orders.find((order) => order.item === props)
							? cartCtx.orders.find((order) => order.item === props)!.quantity
							: 0
					}
					onMealAdd={addMealItemHandler}
					onMealRemove={removeMealItemHandler}
				/>
			</div>
		</li>
	);
};

export default MealItem;
