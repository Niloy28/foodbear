import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "./CartIcon";

import styles from "../../styles/Cart/CartButton.module.css";

interface CartButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const cartCtx = useContext(CartContext);
	const [buttonIsAnimated, setButtonIsAnimated] = useState(false);

	const { orders } = cartCtx;
	useEffect(() => {
		if (orders.length === 0) {
			return;
		}

		setButtonIsAnimated(true);

		const timer = setTimeout(() => {
			setButtonIsAnimated(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [orders]);

	return (
		<button
			onClick={props.onClick}
			className={`${styles["cart-button"]} ${
				buttonIsAnimated ? styles["bump"] : ""
			}`}
		>
			<span className={styles["cart-icon"]}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles["cart-badge"]}>
				{orders
					.map((order) => order.quantity)
					.reduce((totalAmount, quantity) => totalAmount + quantity, 0)}
			</span>
		</button>
	);
};

export default CartButton;
