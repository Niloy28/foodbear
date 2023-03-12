import React from "react";
import CartButton from "../Cart/CartButton";

import styles from "../../styles/Layout/Header.module.css";

const Header: React.FC<{ onCartButtonClick: () => void }> = (props) => {
	return (
		<header className={styles.header}>
			<h1>foodbear</h1>
			<CartButton onClick={props.onCartButtonClick} />
		</header>
	);
};

export default Header;
