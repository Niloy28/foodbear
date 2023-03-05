import React from "react";

import styles from "../../styles/Layout/Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>foodbear</h1>
			<button>Cart</button>
		</header>
	);
};

export default Header;
