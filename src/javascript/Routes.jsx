import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home.jsx';
import Shop from './views/Shop.jsx';
import Mission from './views/Mission.jsx';
import About from './views/About.jsx';
import MemberLogin from './views/MemberLogin.jsx';
import Reviews from './views/Reviews.jsx';
import FAQ from './views/FAQ.jsx';
import Contact from './views/Contact.jsx';
import Register from './views/Register.jsx';

class Routes extends Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/shop" component={Shop} />
					<Route path="/mission" component={Mission} />
					<Route path="/about" component={About} />
					<Route path="/login" component={MemberLogin} />
					<Route path="/reviews" component={Reviews} />
					<Route path="/faq" component={FAQ} />
					<Route path="/contact" component={Contact} />
					<Route path="/register" component={Register} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;