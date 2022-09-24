import React, { useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "./Products";
import { SET_PRODUCTS } from "../REDUX/ACTIONS/productActions";
import axios from "axios";

const ProductsList = (props) => {
	const products = useSelector((state) => state.allProducts.products);
	console.log("products", products);

	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((error) => {
				console.log("error", error);
			});
		dispatch(SET_PRODUCTS(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div>
			<div id="pageTextDiv">
				<h1 id="pageText"> PRODUCTS </h1>
			</div>
			<div className="ui grid container">
				<Products />
			</div>
		</div>
	);
};

export default ProductsList;
