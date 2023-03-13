import React, { useContext } from "react";
import Meal from "../../types/Meal";
import Button from "../Input/Button";
import CartContext from "../../store/CartContext";

import styles from "../../styles/Cart/CartItem.module.css";

interface CartItemProps {
	item: Meal;
	quantity: number;
}

const CartItem: React.FC<CartItemProps> = (props) => {
	const cartCtx = useContext(CartContext);

	const addItemHandler = () => {
		const meal: Meal = {
			...props.item,
		};
		console.log(meal);
		cartCtx.addItemToCart(meal);
	};

	const removeItemHandler = () => {
		const meal: Meal = {
			...props.item,
		};
		console.log(meal);

		cartCtx.removeItemFromCart(meal);
	};

	return (
		<li key={props.item.id} className={styles["cart-list"]}>
			<div className={styles["cart-item"]}>
				<div className={styles["item-name"]}>{props.item.name}</div>
				<div className={styles["item-purchase-info"]}>
					<div className={styles["item-count"]}>
						<Button onClick={addItemHandler}>+</Button>
						<div>{props.quantity}</div>
						<Button onClick={removeItemHandler}>-</Button>
					</div>
					<div className={styles["item-price"]}>
						${(props.item.price * props.quantity).toFixed(2)}
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
