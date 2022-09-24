import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
} from "../REDUX/ACTIONS/productActions";

const ProductsDetail = () => {
	const { productId } = useParams();
	const product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;

	const dispatch = useDispatch();
	console.log(product);

	const fetchProductDetail = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				console.log(err);
			});

		dispatch(SELECTED_PRODUCT(response.data));
	};

	useEffect(() => {
		document.title = "OSHBISHOP - Product Details ";
		if (productId && productId !== "") fetchProductDetail();
		return () => {
			dispatch(REMOVE_SELECTED_PRODUCT());
		};
	}, [productId]);
	return (
		<div className="ui container">
			{Object.keys(product).length === "0" ? (
				<div>...Loading</div>
			) : (
				<div>
					<div id="pageTextDiv">
						<h1 id="pageText">PRODUCT DETAILS</h1>
					</div>
					<div className="ui placeholder segment">
						<div className="ui two column stackable center aligned grid">
							<div className="ui vertical divider"> AND </div>
							<div className="middle aligned row">
								<div className="column lp">
									<img className="ui fluid image" src={image} alt="" />
								</div>
								<div className="column rp">
									<h1>{title}</h1>
									<h2>
										<a className="ui teal tag label">${price} </a>
									</h2>
									<h3 className="ui brown block header">{category} </h3>
									<p>{description} </p>
									<div className="ui vertical animated button" tabIndex={0}>
										<div className="hidden content">
											<i className="shop icon"></i>
										</div>
										<div className="visible content"> Add to Cart </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductsDetail;
