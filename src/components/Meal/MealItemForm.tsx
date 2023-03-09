import React from "react";

import styles from "../../styles/Meal/MealItemForm.module.css";

const MealItemForm = () => {
	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form
			action="submit"
			onSubmit={formSubmitHandler}
			className={styles["meal-form"]}
		>
			<button>+</button>
		</form>
	);
};

export default MealItemForm;
