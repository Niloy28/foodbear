import React from "react";

import styles from "../../styles/Input/Button.module.css";

interface ButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children?: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={`${styles["button"]} ${props.className}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
