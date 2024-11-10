import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./Carticon"; // Fixed spelling (CartIcon)
import Image from "next/image";

const Navbar = () => {
  const user = false; // Simulated user login status

  return (
    <div className="navbar-container">
      {/* LEFT LINKS */}
      <div className="navbar-links-left">
        <Link href="/" className="navbar-link">Homepage</Link>
        <Link href="/menu" className="navbar-link">Menu</Link>
        <Link href="/contact" className="navbar-link">Contact</Link> {/* Contact Link */}
      </div>

      {/* LOGO */}
      <div className="navbar-logo">
        <Link href="/" className="navbar-logo-link">Savoré Feast</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="navbar-menu-mobile">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="navbar-links-right">
        <div className="navbar-phone">
          <Image src="/phone.png" alt="Phone icon" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login" className="navbar-link">Login</Link>
        ) : (
          <Link href="/orders" className="navbar-link">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
