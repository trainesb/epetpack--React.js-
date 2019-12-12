import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home.jsx';
import Shop from './views/Shop.jsx';
import About from './views/About.jsx';
import Mission from './views/Mission.jsx';
import Reviews from './views/Reviews.jsx';
import FAQ from './views/FAQ.jsx';
import Contact from './views/Contact.jsx';
import Login from './views/Login.jsx';

class Routes extends Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/shop" component={Shop} />
					<Route exact path="/about" component={About} />
					<Route path="/mission" component={Mission} />
					<Route exact path="/reviews" component={Reviews} />
					<Route path="/faq" component={FAQ} />
					<Route exact path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;