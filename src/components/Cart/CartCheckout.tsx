import React from "react";

import styles from "../../styles/Cart/CartCheckout.module.css";
import Button from "../Input/Button";

const CartCheckout: React.FC<{ cartCheckoutCancel: () => void }> = (props) => {
	return (
		<>
			<h2 className={styles["header"]}>Checkout</h2>
			<form className={styles["checkout-form"]}>
				<div className={styles["user-info-form"]}>
					<div className={styles["name-phone-form"]}>
						<div id="name">
							<label htmlFor="name" id="name">
								Name:
							</label>
							<input type="text" id="name" />
						</div>
						<div id="phone">
							<label htmlFor="phone" id="phone">
								Phone:
							</label>
							<input type="tel" id="phone" />
						</div>
					</div>

					<div className={styles["address-form"]}>
						<label htmlFor="address" id="address">
							Address:
						</label>
						<textarea id="address" />
					</div>
				</div>

				<div className={styles["buttons"]}>
					<Button onClick={props.cartCheckoutCancel}>Cancel</Button>
					<Button>Confirm</Button>
				</div>
			</form>
		</>
	);
};

export default CartCheckout;
