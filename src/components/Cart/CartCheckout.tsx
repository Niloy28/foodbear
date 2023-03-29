import React from "react";
import Button from "../Input/Button";
import useInput from "../../hooks/use-input";

import styles from "../../styles/Cart/CartCheckout.module.css";

const isInputNotEmpty = (value: string) => value.trim() !== "";

const isEmailAdressValid = (email: string) => {
	const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	return expression.test(email);
};

const CartCheckout: React.FC<{ cartCheckoutCancel: () => void }> = (props) => {
	const {
		inputValue: nameInput,
		isInputValid: isNameValid,
		inputHasError: nameHasError,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		resetInput: resetName,
	} = useInput(isInputNotEmpty);

	const {
		inputValue: phoneInput,
		isInputValid: isPhoneValid,
		inputHasError: phoneHasError,
		inputChangeHandler: phoneChangeHandler,
		inputBlurHandler: phoneBlurHandler,
		resetInput: resetPhone,
	} = useInput(isInputNotEmpty);

	const {
		inputValue: emailInput,
		isInputValid: isEmailValid,
		inputHasError: emailHasError,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		resetInput: resetEmail,
	} = useInput(isEmailAdressValid);

	const {
		inputValue: addressInput,
		isInputValid: isAddressValid,
		inputHasError: addressHasError,
		inputChangeHandler: addressChangeHandler,
		inputBlurHandler: addressBlurHandler,
		resetInput: resetAddress,
	} = useInput(isInputNotEmpty);

	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		nameBlurHandler();
		emailBlurHandler();
		addressBlurHandler();
		phoneBlurHandler();

		const formIsValid =
			isNameValid && isEmailValid && isPhoneValid && isAddressValid;

		if (formIsValid) {
			resetName();
			resetEmail();
			resetAddress();
			resetPhone();
		} else {
			console.log("Invalid form");
		}
	};

	return (
		<>
			<h2 className={styles["header"]}>Checkout</h2>
			<form onSubmit={formSubmitHandler} className={styles["checkout-form"]}>
				<div className={styles["user-info-form"]}>
					<div className={styles["contact-info-form"]}>
						<div id="name">
							<label htmlFor="name" id="name">
								Name:
							</label>
							<input
								type="text"
								id="name"
								className={`${nameHasError ? styles["invalid-form"] : ""}`}
								value={nameInput}
								onChange={nameChangeHandler}
								onBlur={nameBlurHandler}
							/>
						</div>
						{nameHasError && (
							<p className={styles["error-message"]}>
								Please enter a valid name
							</p>
						)}
						<div id="email">
							<label htmlFor="email" id="email">
								Email:
							</label>
							<input
								className={`${emailHasError ? styles["invalid-form"] : ""}`}
								type="email"
								id="email"
								value={emailInput}
								onChange={emailChangeHandler}
								onBlur={emailBlurHandler}
							/>
						</div>
						{emailHasError && (
							<p className={styles["error-message"]}>
								Please enter a valid email
							</p>
						)}
						<div id="phone">
							<label htmlFor="phone" id="phone">
								Phone:
							</label>
							<input
								className={`${phoneHasError ? styles["invalid-form"] : ""}`}
								type="tel"
								id="phone"
								value={phoneInput}
								onChange={phoneChangeHandler}
								onBlur={phoneBlurHandler}
							/>
						</div>
						{phoneHasError && (
							<p className={styles["error-message"]}>
								Please enter a valid phone number
							</p>
						)}
					</div>

					<div className={styles["address-form-wrapper"]}>
						<div className={styles["address-form"]}>
							<label htmlFor="address" id="address">
								Address:
							</label>
							<textarea
								className={`${addressHasError ? styles["invalid-form"] : ""}`}
								id="address"
								cols={33}
								rows={7}
								value={addressInput}
								onChange={addressChangeHandler}
								onBlur={addressBlurHandler}
							/>
						</div>
						{addressHasError && (
							<p className={styles["error-message"]}>
								Please enter a delivery address
							</p>
						)}
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
