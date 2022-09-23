import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
} from "../REDUX/ACTIONS/productActions";
import Loading from "./Loading";

const ProductsDetail = (props) => {
	const product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;
	const { productId } = useParams();
	const dispatch = useDispatch();
	console.log(product);

	useEffect(() => {
		document.title = `OSHBISHOP - Product ${description}`;
	}, []);

	const fetchProductDetail = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => console.log(err));

		dispatch(SELECTED_PRODUCT(response.data));
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail();
		return () => {
			dispatch(REMOVE_SELECTED_PRODUCT());
		};
	}, [productId]);
	return (
		<div>
			<div
				style={{
					width: "100%",
					marginTop: "30px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<h1
					style={{
						marginRight: "85px",
						marginBottom: "20px",
						fontSize: "3.5rem",
						color: "#182747",
						textShadow: "0 0 13px #fff",
						fontFamily: "'Kalam', cursive",
						fontWeight: "bolder",
					}}
				>
					{" "}
					PRODUCT DETAILS{" "}
				</h1>
			</div>{" "}
			<div className="ui grid container">
				{Object.keys(product).length === 0 ? (
					<Loading />
				) : (
					<div className="ui placeholder segment">
						<div className="ui two column stackable center aligned grid">
							<div className="ui vertical divider"> & </div>
							<div className="middle aligned row">
								<div className="column lp">
									<img className="ui fluid image" />
								</div>
								<div className="column rp">
									<h1>{title} </h1>
									<h2>
										<a className="ui teal tag label">${price} </a>
									</h2>
									<h3 className="ui brown block header">{category} </h3>
									<p>{description} </p>
									<div className="ui vertigal animated button" tabIndex="0">
										<div className="hidden content">
											<i className="shop icon"></i>
										</div>
										<div className="visible content"> Add to Cart </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductsDetail;
