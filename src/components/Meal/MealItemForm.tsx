import React from "react";

import styles from "../../styles/Meal/MealItemForm.module.css";
import Button from "../Input/Button";

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
			<Button onClick={mealAddHandler}>+</Button>
			{props.mealCount > 0 && (
				<>
					<div>{props.mealCount}</div>
					<Button onClick={mealRemoveHandler}>-</Button>
				</>
			)}
		</form>
	);
};

export default MealItemForm;
