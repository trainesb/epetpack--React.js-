import React, {Component} from "react";

import Image from '../presentational/Image.jsx';
import Title from '../presentational/Title.jsx';

import Logo from '../../images/CatPack_Logo_Print.png';

import '../../scss/product.scss';

class Product extends Component {

    render() {
        return(
            <div className={'product-card'}>
                <Image src={Logo} alt={''} />
                <Title title={'Product Title'} />
                <p>Price: $$$</p>
            </div>
        );
    }
}

export default Product;