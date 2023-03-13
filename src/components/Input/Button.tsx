import React from "react";

import styles from "../../styles/Input/Button.module.css";

interface ButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className={styles["button"]} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
