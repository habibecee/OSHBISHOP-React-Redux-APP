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
			<div
				className="five wide column"
				key={id}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Link to={`/product/${id}`}>
					<div className="ui link cards">
						<div
							className="orange card"
							style={{
								width: "300px",
								height: "400px",
								marginTop: "30px",
							}}
						>
							<div
								id="image"
								className="image"
								style={{ width: "290px", height: "210px" }}
							>
								<img
									src={image}
									alt={title}
									style={{ width: "100%", height: "100%", padding: "5px" }}
								/>
							</div>
							<div
								className="content"
								style={{
									marginTop: "10px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "space-around",
									textDecoration: "none",
								}}
							>
								<div className="header" style={{ height: "50px" }}>
									{" "}
									{title}{" "}
								</div>
								<div
									className="meta price"
									style={{
										height: "35px",
										marginTop: "40px",
										color: "rgba(196, 200, 63, 1)",
										fontSize: "20px",
										fontWeight: "bolder",
									}}
								>
									{" "}
									<b>$ {price}</b>{" "}
								</div>
								<div
									id="categoryName"
									className="meta"
									style={{
										height: "25px",
										fontWeight: "900px",
										fontSize: "18px",
										color: "#533483",
										textDecoration: "none",
										textShadow: "0 0 8px #533483, 0 0 5px #fff",
									}}
								>
									{" "}
									{categoryUpper}{" "}
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
