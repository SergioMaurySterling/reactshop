import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({item}) => {

	const { removeFromCart } = useContext(AppContext)

	const handleRemove = item => {
		removeFromCart(item);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={item.image} alt={item.title} />
			</figure>
			<p>{item.title}</p>
			<p>{item.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(item)} />
		</div>
	);
}

export default OrderItem;
