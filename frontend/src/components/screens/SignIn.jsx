import React from "react";
import "../styling/SignIn.css";

import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <div>
      <div className="container-signIn">
        <div className="container-signIn-content">
          <form>
            <div className="container-heading">
              <h1>ACCOUNT LOGIN</h1>
            </div>
            <div>
              <input
                type="email"
                required
                placeholder="enter email"
                className="email-signIn"
              />
            </div>

            <div>
              <input
                type="tel"
                required
                placeholder="phone number"
                className="phone-signIn"
              />
            </div>

            <div>
              <input
                type="password"
                required
                placeholder="enter password"
                className="password-signIn"
              />
            </div>

            <div>
              <input
                type="submit"
                value="Login"
                className="submit-btn-signIn"
              />
            </div>
          </form>
          <div>
            <button className="btn-google-signIn">
              signin with google <FaGoogle size={15} className="icon-google" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
