import React, { useContext } from "react";
import Meal from "../../types/Meal";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";

import styles from "../../styles/Meal/MealItem.module.css";

const MealItem: React.FC<Meal> = (props) => {
	const cartCtx = useContext(CartContext);

	const addMealItemHandler = () => {
		const meal: Meal = {
			id: props.id,
			name: props.name,
			description: props.description,
			price: props.price,
		};
		cartCtx.addItemToCart(meal);
	};

	const removeMealItemHandler = () => {
		const meal: Meal = {
			id: props.id,
			name: props.name,
			description: props.description,
			price: props.price,
		};
		cartCtx.removeItemFromCart(meal);
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
						cartCtx.orders.find((order) => order.item.id === props.id)
							? cartCtx.orders.find((order) => order.item.id === props.id)!
									.quantity
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
