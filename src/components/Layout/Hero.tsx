import React from "react";

import styles from "../../styles/Layout/Hero.module.css";

import MealImage from "../../assets/meals.jpg";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<img src={MealImage} alt="" />
		</div>
	);
};

export default Hero;
