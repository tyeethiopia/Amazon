import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
	"pk_test_51IS2nTLnXp6vrR3GZR5dlmPekYD3kKp52R0D9J0PTLY1ZZKNgNkCmchBtpVB34Q7tyRGbsbEyFWm2iqXHuG31hsQ00ptUiPNFC"
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/payment">
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
