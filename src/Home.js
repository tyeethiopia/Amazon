import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/ACQ/HDUpgrade_02152021/Gateway/DV2/US-EN_012721_HDUpgradeRefreshQ1_ACQ_GW_Hero_D_3000x1200_CV18d._CB659587170_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="484821341"
						title="Sony Alpha a7 IIK E-mount interchangeable lens mirrorless camera"
						price={(1, 598.89)}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71xU1YRtrtL._AC_SX679_.jpg"
					/>
					<Product
						id="2001341"
						title="Homall Gaming Chair Office Chair High Back Computer Chair Leather Desk"
						price={139.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61HEqHMkRhL._AC_SX679_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="0821343"
						title="Mini waffle maker Machine for Individual, Paninis, Hash Browns, & other , 4 inch, Aqua"
						price={9.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/61zjkKfbQsL._AC_SX679_.jpg"
					/>
					<Product
						id="47621343"
						title="Echo Glow - Multicolor smart lamp for kids,  – Requires compatible Alexa device"
						price={29.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/51HWLecrpjL._AC_SX569_.jpg"
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="58321341"
						title="Venture Pal Large 1 Gallon Motivational Water Bottle with 2 Lids (Chug and Straw)"
						price={23.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71b90xUDIHL._AC_SX679_.jpg"
					/>
					<Product
						id="90832134"
						title="REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
						price={59.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/71BW2BO-eWL._SX679_.jpg"
					/>
					<Product
						id="12321341"
						title="Under Armour Adult Sports Mask"
						price={30.35}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/A13%2BVCxoiIL._AC_UX679_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="08123213"
						title="Coaster Home Furniture Brennan 3-Drawer Reversible set up Office Desk | White"
						price={145.22}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/61YcBtioAtL._AC_SX679_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
