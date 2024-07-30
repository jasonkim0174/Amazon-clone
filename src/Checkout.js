import React, { useState } from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [removedItems, setRemovedItems] = useState([]);

  const handleRemoveFromBasket = uniqueId => {
    setRemovedItems(prevItems => [...prevItems, uniqueId]);
    setTimeout(() => {
      // Dispatch the removal from the data layer after animation
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        uniqueId: uniqueId,
      });
      setRemovedItems(prevItems => prevItems.filter(itemId => itemId !== uniqueId));
    }, 500); // Duration of the slide-out animation
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {basket.map((item, index) =>
            <CheckoutProduct
              key={item.uniqueId}
              uniqueId={item.uniqueId}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              onRemoveFromBasket={handleRemoveFromBasket}
              isRemoved={removedItems.includes(item.uniqueId)}
            />
          )}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;
