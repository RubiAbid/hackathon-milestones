import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="cart-page-container">
      {/* PRODUCTS CONTAINER */}
      <div className="products-container">
        {/* SINGLE ITEM */}
        <div className="cart-item">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="item-details">
            <h1 className="item-name">sicilian</h1>
            <span className="item-size">Large</span>
          </div>
          <h2 className="item-price">$79.90</h2>
          <span className="remove-item">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="cart-item">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="item-details">
            <h1 className="item-name">sicilian</h1>
            <span className="item-size">Large</span>
          </div>
          <h2 className="item-price">$79.90</h2>
          <span className="remove-item">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="cart-item">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="item-details">
            <h1 className="item-name">sicilian</h1>
            <span className="item-size">Large</span>
          </div>
          <h2 className="item-price">$79.90</h2>
          <span className="remove-item">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="payment-container">
        <div className="subtotal">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="service-cost">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="delivery-cost">
          <span>Delivery Cost</span>
          <span className="free-delivery">FREE!</span>
        </div>
        <hr className="separator" />
        <div className="total">
          <span>TOTAL(INCL. VAT)</span>
          <span className="total-amount">$81.70</span>
        </div>
        <button className="checkout-button">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
