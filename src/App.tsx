import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meal/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
	return (
		<CartContextProvider>
			<Header />
			<Hero />
			<main>
				<Meals />
			</main>
		</CartContextProvider>
	);
}

export default App;
