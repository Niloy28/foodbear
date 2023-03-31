import React, { useState, useContext, useEffect } from "react";
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
import useFetch from "../../hooks/use-fetch";

type CheckoutState =
	| "CHECKOUT"
	| "ORDER_SUBMITTING"
	| "ORDER_SUBMITTED"
	| "NONE";

const SUPABASE_ORDER_DB_URL =
	"https://ejczwaadloklsqjfqgep.supabase.co/rest/v1/client-orders";

const Cart: React.FC<{ onCloseButtonClicked: () => void }> = (props) => {
	const [cartState, setCartState] = useState<CheckoutState>("NONE");
	const {
		isLoading: isSavingToDB,
		fetchError,
		fetchData: saveMealOrderToDB,
	} = useFetch(SUPABASE_ORDER_DB_URL);
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
		const orderData = {
			username: user.name,
			address: user.address,
			phone: user.phone,
			email: user.email,
			orders: cartCtx.orders,
		};

		saveMealOrderToDB({
			method: "POST",
			headers: {
				apikey: `${import.meta.env.VITE_SUPABASE_API_KEY}`,
				Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
				"Content-Type": "application/json",
				Prefer: "return=minimal",
			},
			body: JSON.stringify(orderData),
		});

		cartCtx.emptyCart();
	};

	useEffect(() => {
		if (isSavingToDB) {
			if (cartState === "CHECKOUT") {
				setCartState("ORDER_SUBMITTING");
			}
		} else {
			if (cartState === "ORDER_SUBMITTING") {
				setCartState("ORDER_SUBMITTED");
			}
		}
	}, [isSavingToDB]);

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
		<Card className={`${styles["order-common"]} ${styles["order-submitting"]}`}>
			<Oval
				wrapperStyle={{ display: "inherit", textAlign: "center" }}
				color="purple"
				secondaryColor="white"
			/>
		</Card>
	);

	const orderSubmittedModalContent = (
		<Card className={`${styles["order-common"]} ${styles["order-submitted"]}`}>
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
