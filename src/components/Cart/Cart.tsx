import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import CartContext from "../../store/CartContext";

import styles from "../../styles/Cart/Cart.module.css";

const Cart: React.FC<{ onCloseButtonClicked: () => void }> = (props) => {
	const cartCtx = useContext(CartContext);

	return (
		<Modal onClick={props.onCloseButtonClicked}>
			<Card className={styles["cart-modal"]}>
				<div>Cart</div>
				<div>
					<ul>
						{cartCtx.orders.map((order) => (
							<li key={order.item.id}>
								{order.item.name}: {order.quantity}:{" "}
								{order.item.price * order.quantity}
							</li>
						))}
					</ul>
				</div>
				<div>{cartCtx.totalPrice}</div>
			</Card>
		</Modal>
	);
};

export default Cart;
