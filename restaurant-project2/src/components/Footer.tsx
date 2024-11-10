import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <Link href="/" className="footer-logo">Savoré Feast</Link>
      <p className="footer-text">© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
