import React, {Component} from "react";

import Copyright from '../presentational/Copyright.jsx';

import '../../scss/footer.scss';

class Footer extends Component {

    render() {
    	const props = {
    		year: '2020',
    		business: 'Pet Pack, LLC'
    	};

        return(
        	<footer>
        		<Copyright year={props.year} business={props.business} />
        	</footer>
        );
    }
}

export default Footer;