import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";

const Products = (props) => {
	useEffect(() => {
		document.title = "OSHBISHOP - Home";
	}, []);
	const products = useSelector((state) => state.allProducts.products);

	const renderList = products?.map((product) => {
		const { id, title, image, price, category } = product;

		const categoryUpper = category.toUpperCase();

		return (
			<div key={id} id="productListDiv" className="five wide column">
				<Link to={`/product/${id}`}>
					<div className="ui link cards">
						<div className="orange card">
							<div id="image" className="image">
								<img src={image} alt={title} />
							</div>
							<div id="content" className="content">
								<div id="header" className="header">
									{title}
								</div>
								<div id="price" className="meta price">
									<b>${price}</b>
								</div>
								<div id="categoryName" className="meta">
									{categoryUpper}
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	});
	return <>{renderList}</>;
};

export default Products;
