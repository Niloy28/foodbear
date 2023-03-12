import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "./CartIcon";

import styles from "../../styles/Cart/CartButton.module.css";

interface CartButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const cartCtx = useContext(CartContext);

	return (
		<button onClick={props.onClick} className={styles["cart-button"]}>
			<span className={styles["cart-icon"]}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles["cart-badge"]}>
				{cartCtx.orders
					.map((order) => order.quantity)
					.reduce((totalAmount, quantity) => totalAmount + quantity, 0)}
			</span>
		</button>
	);
};

export default CartButton;
