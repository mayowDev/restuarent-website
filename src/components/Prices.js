import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/Prices.css";

function Prices(){
    return(
        <div className="prices-section">
            <h1 className="prices-h1">Discover</h1>
            <h2 className="prices-h2">Our Menu</h2>
            <div className="prices-row">
                {/* first column */}
                <div className="prices-col">
                    <div className="food-container">
                        <h3 className="food-title"> Zinger Burger </h3>
                        
                        <span className="food-price"> 470</span>
                        <h6 className="food-ingridients">Desi fresh chicken, herbal massala, onions, tomatos</h6>
                    </div>
                    <div className="food-container">
                        <h3 className="food-title">Tasty Shawarma  </h3>
                        <span className="food-price"> 249</span>
                        <h6 className="food-ingridients">Grilled chicken, onions, tomato</h6>
                    </div>
                    <div className="food-container">
                        <h3 className="food-title"> Pizza  </h3>
                        
                        <span className="food-price"> 740</span>
                        <h6 className="food-ingridients">mozeral, pepporoni, mushrooms, chicken</h6>
                        
                    </div>
                    <div className="food-container">
                        <h3 className="food-title"> Kebab </h3>
                       
                        <span className="food-price"> 1249</span>
                        <h6 className="food-ingridients">Mutton, onion, Fresh massala, chicken</h6>
                    </div>
                </div>
                {/* second column */}
                <div className="prices-col">
                    <div className="food-container">
                        <h3 className="food-title"> Zinger Burger  </h3>
                        <span className="food-price"> 470</span>
                        <h6 className="food-ingridients">Desi fresh chicken, herbal massala, onions, tomatos</h6>
                    </div>
                    <div className="food-container">
                        <h3 className="food-title">Tasty Shawarma</h3>
                        <span className="food-price"> 249</span>
                        <h6 className="food-ingridients">Grilled chicken, onions, tomato</h6>

                    </div>
                    <div className="food-container">
                        <h3 className="food-title">Pizza  </h3>
                        <span className="food-price"> 740</span>
                        <h6 className="food-ingridients">mozeral, pepporoni, mushrooms, chicken</h6>
                    </div>
                    <div className="food-container">
                        <h3 className="food-title"> Kebab  </h3>
                        <span className="food-price"> 1249</span>
                        <h6 className="food-ingridients">Mutton, onion, Fresh massala, chicken</h6>
                    </div>
                </div>
            </div>
            <a href="#" className="food-button">Order Now</a>
        </div>
    )
}


export default Prices;