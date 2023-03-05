import React from "react";
import CartIcon from "./CartIcon";

import styles from "../../styles/Cart/CartButton.module.css";

interface CartButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	cartItemCount: number;
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	return (
		<button onClick={props.onClick} className={styles["cart-button"]}>
			<span className={styles["cart-icon"]}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles["cart-badge"]}>{props.cartItemCount}</span>
		</button>
	);
};

export default CartButton;
