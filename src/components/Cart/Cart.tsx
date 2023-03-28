import React, { useState, useContext } from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

import styles from "../../styles/Cart/Cart.module.css";
import Meal from "../../types/Meal";
import Button from "../Input/Button";
import CartCheckout from "./CartCheckout";

const Cart: React.FC<{ onCloseButtonClicked: () => void }> = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const cartCtx = useContext(CartContext);

	const addItemHandler = (meal: Meal) => {
		cartCtx.addItemToCart(meal);
	};

	const removeItemHandler = (meal: Meal) => {
		cartCtx.removeItemFromCart(meal);
	};

	const closeCartHandler = () => {
		setIsCheckout(false);
		props.onCloseButtonClicked();
	};

	const proceedToCheckoutHandler = () => {
		setIsCheckout(true);
	};

	return (
		<Modal onClick={closeCartHandler}>
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
				{cartCtx.orders.length !== 0 && !isCheckout && (
					<div className={styles["order-button"]}>
						<Button onClick={proceedToCheckoutHandler}>
							Proceed to Checkout
						</Button>
					</div>
				)}
				{isCheckout && <CartCheckout cartCheckoutCancel={closeCartHandler} />}
			</Card>
		</Modal>
	);
};

export default Cart;
