import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="cart-link">
      <div className="cart-image">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
