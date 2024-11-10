import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="login-page-container">
      {/* BOX */}
      <div className="login-box">
        {/* IMAGE CONTAINER */}
        <div className="image-container">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="form-container">
          <h1 className="welcome-heading">Welcome</h1>
          <p className="login-description">
            Log into your account or create a new one using social buttons
          </p>
          <button className="social-login google-login">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="social-login facebook-login">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="contact-us">
            Have a problem? <Link className="contact-link" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
