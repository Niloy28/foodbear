import "./App.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meal/Meals";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<main>
				<Meals />
			</main>
		</div>
	);
}

export default App;
