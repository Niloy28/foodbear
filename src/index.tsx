import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContext from "./store/CartContext";

import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<CartContext.Provider value={{ meals: [] }}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</CartContext.Provider>
);
