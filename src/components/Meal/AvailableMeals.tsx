import React, { useMemo } from "react";
import { Oval } from "react-loader-spinner";
import Meal from "../../types/Meal";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import useFetch from "../../hooks/use-fetch";

import styles from "../../styles/Meal/AvailableMeals.module.css";

const MEAL_FETCH_URL = `https://ejczwaadloklsqjfqgep.supabase.co/rest/v1/foodbear-meals?apikey=${
	import.meta.env.VITE_SUPABASE_API_KEY
}`;

const AvailableMeals = () => {
	const mealFetchRequest = useMemo(
		() => new Request(MEAL_FETCH_URL),
		[MEAL_FETCH_URL]
	);

	const {
		isLoading,
		data: mealData,
		fetchError: mealFetchError,
	} = useFetch<Meal[]>(mealFetchRequest);

	let displayedElem;
	if (isLoading && !mealData) {
		displayedElem = (
			<div className={styles["loader-spinner"]}>
				<Oval color="purple" secondaryColor="white" />
			</div>
		);
	} else if (!isLoading && (mealFetchError || !mealData)) {
		displayedElem = (
			<div className={styles["error-message"]}>
				<p>An error has occured.</p>
			</div>
		);
	} else if (!isLoading && mealData) {
		displayedElem = (
			<ul>
				{mealData.map((meal) => (
					<MealItem key={meal.id} {...meal} />
				))}
			</ul>
		);
	}

	return (
		<div>
			<section>
				<Card className={styles["available-meals"]}>{displayedElem}</Card>
			</section>
		</div>
	);
};

export default AvailableMeals;
