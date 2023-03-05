import React from "react";
import CartButton from "../Cart/CartButton";

import styles from "../../styles/Layout/Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>foodbear</h1>
			<CartButton cartItemCount={3} />
		</header>
	);
};

export default Header;
