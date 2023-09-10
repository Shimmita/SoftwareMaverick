import React from "react";

import '../styling/SignUp.css'

import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div>
      <div className="container-signUp">
        <div className="container-signUp-content">

          <form>

            <div className="container-heading">
              <h1>CREATE NEW ACCOUNT</h1>
            </div>

            <div>
              <input
                type="text"
                required
                placeholder="first name"
                className="username-signUp"
              />
            </div>

            <div>
              <input
                type="text"
                required
                placeholder="last name"
                className="username-signUp"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="email address"
                className="email-signUp"
              />
            </div>

            <div>
              <input
                type="tel"
                required
                placeholder="phone number"
                className="phone-signUp"
              />
            </div>

            <div>
              <input
                type="password"
                required
                placeholder="enter password"
                className="password-signUp"
              />
            </div>

            <div>
              <input
                type="password"
                required
                placeholder="confirm password"
                className="password-signUp"
              />
            </div>

            <div>
              <input type="submit" value="signup" className="submit-btn-signUp" />
            </div>
          </form>
          <div>
            <button className="btn-google-signUp">
              signup with google  <FaGoogle size={15} className="icon-google" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
