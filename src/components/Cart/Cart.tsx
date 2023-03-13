import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import CartContext from "../../store/CartContext";

import styles from "../../styles/Cart/Cart.module.css";
import CartItem from "./CartItem";

const Cart: React.FC<{ onCloseButtonClicked: () => void }> = (props) => {
	const cartCtx = useContext(CartContext);

	return (
		<Modal onClick={props.onCloseButtonClicked}>
			<Card className={styles["cart-modal"]}>
				<header className={styles["cart-header"]}>
					<h2>Cart</h2>
				</header>
				<div className={styles["cart-display"]}>
					<ul className={styles["cart-list"]}>
						{cartCtx.orders.map((order) => (
							<CartItem
								key={order.item.id}
								item={order.item}
								quantity={order.quantity}
							/>
						))}
					</ul>
				</div>
				<div className={styles["cart-total"]}>
					<div>Total Price: </div>
					<div>${cartCtx.totalPrice.toFixed(2)}</div>
				</div>
			</Card>
		</Modal>
	);
};

export default Cart;
