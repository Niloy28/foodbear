import React from "react";

import styles from "../../styles/Meal/MealItemForm.module.css";

interface MealItemProps {
	mealCount: number;
	onMealAdd: () => void;
	onMealRemove: () => void;
}

const MealItemForm: React.FC<MealItemProps> = (props) => {
	const mealAddHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		props.onMealAdd();
	};

	const mealRemoveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		props.onMealRemove();
	};

	return (
		<form action="submit" className={styles["meal-form"]}>
			<button onClick={mealAddHandler}>+</button>
			{props.mealCount > 0 && (
				<>
					<div>{props.mealCount}</div>
					<button onClick={mealRemoveHandler}>-</button>
				</>
			)}
		</form>
	);
};

export default MealItemForm;
