import React, { useEffect } from "react";
import "./CartSection.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useGlobal } from "../../context/GlobalContext";

const CartSection = () => {
    const { cartItems, setCartItems, buyItem,setBuyItem } = useGlobal();

    const isEmpty = cartItems.length === 0;
  

    useEffect(() => {
        return ()=>{
         setBuyItem(null);
        }
    },[])

    return (
        <>

        {buyItem === null ?   <div className="cart-wrapper">
            {isEmpty ? (
                <div className="empty-cart">
                    <h2>Currently the basket is empty</h2>
                    <p>We have a wide range of plans to choose from</p>

                    <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
                        <div className="buy-box">
                            <button className="buy-btn">
                                Buy a new line now <span>→</span>
                            </button>
                        </div>
                    </Link>

                    <div className="helpline">
                        <div className="phone-icon">📞</div>
                        <p>
                            <strong>Order helpline</strong><br />
                            Call us on 0207 132 0322 or 322 from any Lyca Mobile number
                        </p>
                    </div>
                </div>
            ) : (
                <div className="cart-items">
                    <h2>Items in your basket</h2>

                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <div className="cart-item-header">
                                <h3>{item.title}</h3>
                                <span className="price">{item.price}</span>
                            </div>

                            <div className="cart-item-body">
                                <p>{item.description}</p>
                                <span className="duration">{item.validity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div> : <div className="cart-items">
                    <h2>Items in your basket</h2>

            
                        <div className="cart-item">
                            <div className="cart-item-header">
                                <h3>{buyItem.title}</h3>
                                <span className="price">{buyItem.price}</span>
                            </div>

                            <div className="cart-item-body">
                                <p>{buyItem.description}</p>
                                <span className="duration">{buyItem.validity}</span>
                            </div>
                        </div>
   
                </div>}
       
        </>
    );
};

export default CartSection;
