import React from "react";
import Meal from "../../types/Meal";

import styles from "../../styles/Meal/AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

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
		<div>
			<section>
				<Card className={styles["available-meals"]}>
					<ul>
						{DUMMY_MEALS.map((meal) => (
							<MealItem
								key={meal.id}
								id={meal.id}
								name={meal.name}
								description={meal.description}
								price={meal.price}
							/>
						))}
					</ul>
				</Card>
			</section>
		</div>
	);
};

export default AvailableMeals;
