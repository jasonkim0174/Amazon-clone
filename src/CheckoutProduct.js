import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ uniqueId, id, image, title, price, rating, hideButton, onRemoveFromBasket, isRemoved }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        onRemoveFromBasket(uniqueId);
    };

    return (
        <div className={`checkoutProduct ${isRemoved ? "checkoutProduct--remove" : ""}`}>
            <img className='checkoutProduct__image' src={image} alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;
