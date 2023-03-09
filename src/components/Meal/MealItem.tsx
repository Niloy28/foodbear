import React from "react";
import Meal from "../../types/Meal";

import styles from "../../styles/Meal/MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem: React.FC<Meal> = (props) => {
	return (
		<li className={styles["meal-item"]}>
			<div className={styles["meal-text"]}>
				<h3>{props.name}</h3>
				<section className={styles["meal-description"]}>
					{props.description}
				</section>
				<div className={styles["meal-price"]}>${props.price.toFixed(2)}</div>
			</div>
			<div>
				<MealItemForm />
			</div>
		</li>
	);
};

export default MealItem;
