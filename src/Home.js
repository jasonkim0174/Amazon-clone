import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [basketMessage, setBasketMessage] = useState({});
  const [basketCounts, setBasketCounts] = useState({});

  const handleAddToBasket = (id, title, image) => {
    const newCount = (basketCounts[id] || 0) + 1;
    setBasketCounts(prevCounts => ({
      ...prevCounts,
      [id]: newCount
    }));

    setBasketMessage({
      message: `${title} has been added to basket${newCount > 1 ? ` (${newCount})` : ""}`,
      image: image
    });

    setTimeout(() => {
      setBasketMessage({});
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Airpods Pro (2nd Generation)"
            price={159.99}
            rating={4}
            image="https://i.imgur.com/tudkyaA.png"
            onAddToBasket={handleAddToBasket}
          />
          <Product
            id="49538094"
            title="Nike Tottenham Hotspur 23/24 Home Jersey"
            price={109.99}
            rating={5}
            image="https://i.imgur.com/U6ElhTW.jpeg"
            onAddToBasket={handleAddToBasket}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Body-Solid Rubber Coated Hex Dumbbells Sets 5 to 50 lbs"
            price={45.99}
            rating={3}
            image="https://i.imgur.com/p17qm8o.jpeg"
            onAddToBasket={handleAddToBasket}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            onAddToBasket={handleAddToBasket}
          />
          <Product
            id="3254354345"
            title="Computer Desk with Two Drawers, 50 inch Desk with LED lights and Power Outlets"
            price={235.99}
            rating={4}
            image="https://i.imgur.com/iCFZ5rV.jpeg"
            onAddToBasket={handleAddToBasket}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            onAddToBasket={handleAddToBasket}
          />
        </div>
      </div>

      {basketMessage.message && (
        <div className="basketMessage">
          <img src={basketMessage.image} alt="Product" className="basketMessage__image" />
          <span>{basketMessage.message}</span>
        </div>
      )}
    </div>
  );
}

export default Home;
