import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext.js'

import addToCartBtn from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {

	const {addToCart,state} = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>LA CONCHA E TU MADRE</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartBtn} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
