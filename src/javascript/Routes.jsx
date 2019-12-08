import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home.jsx';
import Shop from './views/Shop.jsx';

class Routes extends Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/shop" component={Shop} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;