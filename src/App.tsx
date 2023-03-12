import { useState } from "react";

import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meal/Meals";
import CartContextProvider from "./store/CartContextProvider";
import Cart from "./components/Cart/Cart";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const openCartHandler = () => {
		setCartIsShown(true);
	};

	const closeCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartContextProvider>
			{cartIsShown && <Cart onCloseButtonClicked={closeCartHandler} />}
			<Header onCartButtonClick={openCartHandler} />
			<Hero />
			<main>
				<Meals />
			</main>
		</CartContextProvider>
	);
}

export default App;
