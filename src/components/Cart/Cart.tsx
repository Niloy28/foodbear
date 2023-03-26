import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

import styles from "../../styles/Cart/Cart.module.css";
import Meal from "../../types/Meal";
import Button from "../Input/Button";

const Cart: React.FC<{ onCloseButtonClicked: () => void }> = (props) => {
	const cartCtx = useContext(CartContext);

	const addItemHandler = (meal: Meal) => {
		cartCtx.addItemToCart(meal);
	};

	const removeItemHandler = (meal: Meal) => {
		cartCtx.removeItemFromCart(meal);
	};

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
								onAddItem={addItemHandler.bind(null, order.item)}
								onRemoveItem={removeItemHandler.bind(null, order.item)}
							/>
						))}
					</ul>
				</div>
				<div className={styles["cart-total"]}>
					<div>Total Price: </div>
					<div>${cartCtx.totalPrice.toFixed(2)}</div>
				</div>
				{cartCtx.orders.length !== 0 && (
					<div className={styles["order-button"]}>
						<Button>Place Order</Button>
					</div>
				)}
			</Card>
		</Modal>
	);
};

export default Cart;
