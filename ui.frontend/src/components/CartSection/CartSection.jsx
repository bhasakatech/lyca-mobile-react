import React, { useEffect, useState } from "react";
import "./CartSection.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useGlobal } from "../../context/GlobalContext";
import { MdDeleteOutline } from "react-icons/md";

const CartSection = () => {
    const { cartItems, setCartItems, buyItem, setBuyItem } = useGlobal();
    const plansInCart = JSON.parse(localStorage.getItem("cartPlanItems")) || []
    const isEmpty = plansInCart.length === 0 ? true : false;

    const [recentPlan, setRecentPlan] = useState(null);
    const [allItems, setAllItems] = useState(null);

    console.log(plansInCart, "cartFinalItems")

    useEffect(() => {
        return () => {
            setBuyItem(null);
        }
    }, [])

    const removeUser = (id, index) => {
        const updatedUsers = plansInCart.filter((user, id) => (id !== index));

        setCartItems(updatedUsers);
        localStorage.setItem("cartPlanItems", JSON.stringify(updatedUsers));
    };

    const clearAllUser = () => {
        window.scrollTo(0, 0);

        // Clear storage
        localStorage.removeItem("user");
        localStorage.removeItem("cartPlanItems");

        // Clear context state
        setBuyItem(null);
        setCartItems([]);
    };


    useEffect(() => {
        setRecentPlan(JSON.parse(localStorage.getItem("user")) || null);
        setAllItems(JSON.parse(localStorage.getItem("cartPlanItems")) || null);

    }, [cartItems])



    return (
        <>
            {/* {recentPlan === null && allItems === null ?
                <div className="cart-wrapper">
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

                            {plansInCart?.map((item, index) => (
                                <React.Fragment>
                                    <div className="cart-item" key={index}>
                                        <div className="cart-item-header">
                                            <h3>{item?.planTag}</h3>
                                            <span className="price">{item?.price}</span>
                                        </div>

                                        <div className="cart-item-body">
                                            <p>{item?.esimNote}</p>
                                            <span className="duration">{item?.duration.replace("/", "")}</span>
                                        </div>
                                        <div className="removeIcon">
                                            <MdDeleteOutline onClick={() => removeUser(item, index)} />
                                        </div>
                                    </div>

                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div> :
                <div className="cart-wrapper">
                    <div className="cart-items">
                        <h2>Items in your basket</h2>


                        <div className="cart-item">
                            <div className="cart-item-header">
                                <h3>{recentPlan?.planTag}</h3>
                                <span className="price">{recentPlan?.price}</span>
                            </div>

                            <div className="cart-item-body">
                                <p>{recentPlan?.esimNote}</p>
                                <span className="duration">{recentPlan?.duration.replace("/", "")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="checkout-cancel-btns">
                <div className="checkout-sub">
                    <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
                        <button className="cancel-btn">
                            Cancel
                        </button>
                    </Link>
                    <button onClick={() => { alert("Order has Placed Successfully"); clearAllUser(); }} className="checkout-btn">
                        Check Out
                    </button>
                </div>
            </div> */}

            <>
                <div className="cart-wrapper">

                    {/* 1️⃣ EMPTY CART */}
                    {recentPlan === null && allItems === null && (
                        <div className="empty-cart">
                            <h2>Currently the basket is empty</h2>
                            <p>We have a wide range of plans to choose from</p>

                            <Link
                                to="/content/lyca-mobile/us/en/home/buy-sim---plan.html"
                                onClick={() => window.scrollTo(0, 0)}
                            >
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
                    )}

                    {/* 2️⃣ RECENT PLAN */}
                    {recentPlan !== null && (
                        <div className="cart-items">
                            <h2>Items in your basket</h2>

                            <div className="cart-item">
                                <div className="cart-item-header">
                                    <h3>{recentPlan.planTag}</h3>
                                    <span className="price">{recentPlan.price}</span>
                                </div>

                                <div className="cart-item-body">
                                    <p>{recentPlan.esimNote}</p>
                                    <span className="duration">
                                        {recentPlan.duration?.replace("/", "")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 3️⃣ MULTIPLE CART ITEMS */}
                    {recentPlan === null &&
                        Array.isArray(allItems) &&
                        allItems.length > 0 && (
                            <div className="cart-items">
                                <h2>Items in your basket</h2>

                                {allItems.map((item, index) => (
                                    <div className="cart-item" key={index}>
                                        <div className="cart-item-header">
                                            <h3>{item.planTag}</h3>
                                            <span className="price">{item.price}</span>
                                        </div>

                                        <div className="cart-item-body">
                                            <p>{item.esimNote}</p>
                                            <span className="duration">
                                                {item.duration?.replace("/", "")}
                                            </span>
                                        </div>

                                        <div className="removeIcon">
                                            <MdDeleteOutline
                                                onClick={() => removeUser(item, index)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                </div>

                {/* 🔘 CANCEL & CHECKOUT BUTTONS */}
                {(recentPlan !== null ||
                    (Array.isArray(allItems) && allItems.length > 0)) && (
                        <div className="checkout-cancel-btns">
                            <div className="checkout-sub">
                                <Link
                                    to="/content/lyca-mobile/us/en/home/buy-sim---plan.html"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    <button className="cancel-btn">
                                        Cancel
                                    </button>
                                </Link>

                                <button
                                    onClick={() => {
                                        alert("Order has Placed Successfully");
                                        clearAllUser();
                                    }}
                                    className="checkout-btn"
                                >
                                    Check Out
                                </button>
                            </div>
                        </div>
                    )}
            </>



        </>
    );
};

export default CartSection;
