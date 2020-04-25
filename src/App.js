import React, { Component } from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './containers/Home';
import About from './containers/About';
import Cart from './cart/mycart';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/about' component={About} />
						<Route path='/cart' component={Cart} />
						<Redirect to='/' exact></Redirect>
					</Switch>
					<Footer />
				</BrowserRouter>
			</React.Fragment>
		);
	}
}
