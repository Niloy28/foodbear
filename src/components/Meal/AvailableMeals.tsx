import React from "react";
import Meal from "../../types/Meal";

import styles from "../../styles/Meal/AvailableMeals.module.css";

const DUMMY_MEALS: Meal[] = [
	{
		id: "m1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
	},
	{
		id: "m2",
		name: "Schnitzel",
		description: "A german specialty!",
		price: 16.5,
	},
	{
		id: "m3",
		name: "Barbecue Burger",
		description: "American, raw, meaty",
		price: 12.99,
	},
	{
		id: "m4",
		name: "Green Bowl",
		description: "Healthy...and green...",
		price: 18.99,
	},
];

const AvailableMeals = () => {
	return (
		<div className={styles["available-meals"]}>
			<section>
				<ul>
					{DUMMY_MEALS.map((meal) => (
						<li>{meal.name}</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default AvailableMeals;
