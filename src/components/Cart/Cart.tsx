import React, { useState, useContext } from "react";
import { Oval } from "react-loader-spinner";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Meal from "../../types/Meal";
import Button from "../Input/Button";
import CartCheckout from "./CartCheckout";
import UserData from "../../types/UserData";

import styles from "../../styles/Cart/Cart.module.css";

type CheckoutState =
	| "CHECKOUT"
	| "ORDER_SUBMITTING"
	| "ORDER_SUBMITTED"
	| "NONE";

const Cart: React.FC<{ onCloseButtonClicked: () => void }> = (props) => {
	const [cartState, setCartState] = useState<CheckoutState>("NONE");
	const cartCtx = useContext(CartContext);

	const addItemHandler = (meal: Meal) => {
		cartCtx.addItemToCart(meal);
	};

	const removeItemHandler = (meal: Meal) => {
		cartCtx.removeItemFromCart(meal);
	};

	const closeCartHandler = () => {
		setCartState("NONE");
		props.onCloseButtonClicked();
	};

	const proceedToCheckoutHandler = () => {
		setCartState("CHECKOUT");
	};

	const submitOrderHandler = (user: UserData) => {
		setCartState("ORDER_SUBMITTING");
		setTimeout(() => {
			console.log("Submitting");
			setCartState("ORDER_SUBMITTED");
			cartCtx.emptyCart();
		}, 1000);
	};

	const checkoutModalContent = (
		<>
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
				{cartCtx.orders.length !== 0 && cartState === "NONE" && (
					<div className={styles["order-button"]}>
						<Button onClick={proceedToCheckoutHandler}>
							Proceed to Checkout
						</Button>
					</div>
				)}
				{cartState === "CHECKOUT" && (
					<CartCheckout
						onSubmit={submitOrderHandler}
						cartCheckoutCancel={closeCartHandler}
					/>
				)}
			</Card>
		</>
	);

	const orderSubmittingModalContent = (
		<Card className={styles["order-submitting"]}>
			<Oval color="purple" secondaryColor="white" />
		</Card>
	);

	const orderSubmittedModalContent = (
		<Card className={styles["order-submitted"]}>
			<p>Order has been successfully completed.</p>
		</Card>
	);

	return (
		<Modal onClick={closeCartHandler}>
			{(cartState === "NONE" || cartState === "CHECKOUT") &&
				checkoutModalContent}
			{cartState === "ORDER_SUBMITTING" && orderSubmittingModalContent}
			{cartState === "ORDER_SUBMITTED" && orderSubmittedModalContent}
		</Modal>
	);
};

export default Cart;
