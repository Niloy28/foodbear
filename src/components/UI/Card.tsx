import React from "react";

import styles from "../../styles/UI/Card.module.css";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card: React.FC<CardProps> = (props) => {
	return (
		<div className={`${styles.card} ${props.className}`}>{props.children}</div>
	);
};

export default Card;
