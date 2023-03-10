import React, { useContext, useState } from "react";
import Meal from "../../types/Meal";

import styles from "../../styles/Meal/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";

const MealItem: React.FC<Meal> = (props) => {
	const cartCtx = useContext(CartContext);
	const [mealCount, setMealCount] = useState(0);

	const addMealItemHandler = () => {
		const meal = cartCtx.meals.find((meal) => meal.item.id === props.id);

		if (meal === undefined) {
			cartCtx.meals.push({
				item: props,
				quantity: 1,
			});
			setMealCount(1);
		} else {
			meal.quantity++;
			setMealCount(meal.quantity);
		}
	};

	const removeMealItemHandler = () => {
		const meal = cartCtx.meals.find((meal) => meal.item.id === props.id);

		if (meal !== undefined) {
			meal.quantity--;
			setMealCount(meal.quantity);

			if (meal.quantity === 0) {
				cartCtx.meals = cartCtx.meals.filter(
					(meal) => meal.item.id !== props.id
				);
			}
		}
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
					mealCount={mealCount}
					onMealAdd={addMealItemHandler}
					onMealRemove={removeMealItemHandler}
				/>
			</div>
		</li>
	);
};

export default MealItem;
