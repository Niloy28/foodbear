import React from "react";
import CartButton from "../Cart/CartButton";

import styles from "../../styles/Layout/Header.module.css";

import LogoImage from "../../assets/logo.png";

const Header: React.FC<{ onCartButtonClick: () => void }> = (props) => {
	return (
		<header className={styles.header}>
			<h1>
				{" "}
				<img src={LogoImage} alt="" height={90} /> foodbear
			</h1>
			<CartButton onClick={props.onCartButtonClick} />
		</header>
	);
};

export default Header;
