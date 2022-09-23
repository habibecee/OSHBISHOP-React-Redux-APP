import React from "react";
import { Link } from "react-router-dom";
import logo from "../ASSETS/logo-shop.jpg";

const Header = (props) => {
	return (
		<div className="navbar navbar-expand-lg">
			<div className="container-fluid ms-3 d-flex justify-content-center align-items-center">
				<div className="me-4">
					<a className="navbar-brand" href="#">
						<img
							src={logo}
							alt=""
							style={{ width: "50px", height: "50px", borderRadius: "50%" }}
						/>
					</a>
				</div>

				<div>
					<Link
						to={"/"}
						className="navbar-brand"
						href="#"
						style={{
							fontSize: "30px",
							fontWeight: "bold",
							color: "#8CC0DE",
							textShadow: "0px 0px 7px rgb(250, 151, 151)",
						}}
					>
						{" "}
						OSHBISHOP{" "}
					</Link>
				</div>

				{/* <button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button> */}
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
					style={{ marginLeft: "250px" }}
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item me-5">
							<Link
								to={"/"}
								className="nav-link"
								aria-current="page"
								href="/"
								style={{ fontSize: "20px" }}
							>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" style={{ fontSize: "20px" }}>
								Categories
							</a>
						</li>
					</ul>

					<form className="d-flex" role="search">
						<input
							className="searchInput form-control me-0"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="searchButton btn btn-secondary" type="submit">
							<i className="fa-solid fa-magnifying-glass" />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Header;
