import React from "react";
import Meal from "../../types/Meal";
import Button from "../Input/Button";

import styles from "../../styles/Cart/CartItem.module.css";

interface CartItemProps {
	item: Meal;
	quantity: number;
	onAddItem: () => void;
	onRemoveItem: () => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
	return (
		<li key={props.item.id} className={styles["cart-list"]}>
			<div className={styles["cart-item"]}>
				<div>
					<div className={styles["item-name"]}>{props.item.name}</div>
					<div>${props.item.price}</div>
				</div>
				<div className={styles["item-purchase-info"]}>
					<div className={styles["item-count"]}>
						<Button onClick={props.onAddItem}>+</Button>
						<div>{props.quantity}</div>
						<Button onClick={props.onRemoveItem}>-</Button>
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
