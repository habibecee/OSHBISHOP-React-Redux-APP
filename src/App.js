import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./CONTAINERS/Header";
import ProductsList from "./CONTAINERS/ProductsList";
import ProductsDetail from "./CONTAINERS/ProductsDetail";
import Products from "./CONTAINERS/Products";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<ProductsList />} />
					<Route path="/product/:productId" element={<ProductsDetail />} />
					<Route> 404 Not Found! </Route>
					<Route path="/" element={Products} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
