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
              <input type="text" required placeholder=" " />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="password" required placeholder=" " />
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
                Don&apos;t have an account?{" "}
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
              <input type="text" required placeholder=" " />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="email" required placeholder=" " />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input type="password" required placeholder=" " />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> I agree to the terms &amp; conditions
              </label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="signUp-link">
              <p>
                Already have an account?{" "}
                <Link href="/" className="signInBtn-link">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Script src="/connexion.js" strategy="afterInteractive" />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #000;
        }
        .wrapper {
          position: relative;
          width: 400px;
          height: 500px;
          background: #000;
          box-shadow: 0 0 50px #0ef;
          border-radius: 20px;
          padding: 40px;
          overflow: hidden;
        }
        .form-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          transition: 1s ease-in-out;
        }
        h2 {
          font-size: 30px;
          color: #fff;
          text-align: center;
          margin-bottom: 20px;
        }
        .input-group {
          position: relative;
          margin: 20px 0;
          border-bottom: 2px solid #fff;
          width: 100%;
        }
        .input-group input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 16px;
          padding: 10px 5px;
        }
        .input-group label {
          position: absolute;
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
          color: #fff;
          transition: 0.3s;
          pointer-events: none;
        }
        .input-group input:focus ~ label,
        .input-group input:not(:placeholder-shown) ~ label {
          top: 0;
          font-size: 12px;
          color: #0ef;
        }
        .remember {
          margin: 10px 0;
          color: #fff;
          font-size: 14px;
        }
        button {
          width: 100%;
          padding: 10px;
          margin: 20px 0;
          border: none;
          border-radius: 30px;
          background: #0ef;
          color: #000;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 0 10px #0ef;
        }
        .signUp-link {
          font-size: 14px;
          text-align: center;
          color: #fff;
        }
        .signUp-link a {
          color: #0ef;
          text-decoration: none;
          font-weight: bold;
        }
        .signUp-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Connexion;
