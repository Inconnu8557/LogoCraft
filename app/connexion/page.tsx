"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const Connexion: React.FC = () => {
  return (
    <>
      <Head>
        <title>Animated Login & Registration Form | Codehal</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="wrapper">
        <div className="form-wrapper sign-in">
          <form action="">
            <h2>Login</h2>
            <div className="input-group">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit">Login</button>
            <div className="signUp-link">
              <p>
                Don't have an account?{' '}
                <Link href="#" className="signUpBtn-link">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="form-wrapper sign-up">
          <form action="">
            <h2>Sign Up</h2>
            <div className="input-group">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="signUp-link">
              <p>
                Already have an account?{' '}
                <Link href="/" className="signInBtn-link">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Script src="/connexion.js" strategy="afterInteractive" />
    </>
  );
};

export default Connexion;
