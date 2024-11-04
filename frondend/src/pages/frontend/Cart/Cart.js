import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { imageURL } from "../../../api/config";
import { useAuth } from "../../../component/Provider/AuthProvider";
import './cart.css'; // Import CSS file

function Cart() {
  const { token } = useAuth();
  const [total, setTotal] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const userItems = items.filter(item => item.user_id == token);
  
  useEffect(() => {
    const newTotal = userItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [userItems]);

  const handleCouponApply = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscountAmount(total * 0.1);
    } else {
      setDiscountAmount(0);
    }
  };

  const formatPrice = (price) => {
    const roundedPrice = Math.round(price);
    const formattedPrice = new Intl.NumberFormat('vi-VN').format(roundedPrice);
    return formattedPrice.replace(/,/g, '.') + '.000';
  };

  return (
    <>
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Shopping Cart</li>
            </ol>
          </div>
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="name">Name</td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">  </td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {userItems.map((item) => (
                  <tr key={item.id}>
                    <td className="cart_product">
                      <Link to={`/product/${item.id}`}>
                        <img 
                          src={`${imageURL}/${item.image}`} 
                          alt={item.name} 
                        />
                      </Link>
                    </td>
                    <td className="cart_description">
                      <h4>
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h4>
                    </td>
                    <td className="cart_price">
                      <p>{formatPrice(item.price)}</p>
                    </td>
                    <td className="cart_quantity">
                      <div className="cart_quantity_button">
                        <a
                          className="cart_quantity_up"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </a>
                        <input
                          className="cart_quantity_input"
                          type="text"
                          name="quantity"
                          value={item.quantity}
                          autoComplete="off"
                          size="2"
                        />
                        <a
                          className="cart_quantity_down"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </a>
                      </div>
                    </td>
                    <td className="cart_total">
                      <p className="cart_total_price">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </td>
                    <td className="cart_delete">
                      <a
                        className="cart_quantity_delete"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="do_action">
        <div className="container">
          <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to use
              or would like to estimate your delivery cost.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="chose_area">
                <ul className="user_option">
                  <li>
                    <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                    <button onClick={handleCouponApply}>Apply Coupon</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total_area">
                <ul>
                  <li>
                    Cart Sub Total <span>{formatPrice(total)}</span>
                  </li>
                  <li>
                    Discount <span>{formatPrice(discountAmount)}</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Total <span>{formatPrice(total - discountAmount)}</span>
                  </li>
                </ul>
                <Link to="/payment" className="btn btn-primary ">Đặt hàng</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
