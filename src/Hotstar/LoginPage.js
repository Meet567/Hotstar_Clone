import React from "react";
import "./LoginPage.css";
import HOTSTAR from "../AssetsPic/scanner.png";

function LoginPage() {
  return (
    <div className="login">
      <div className="login2">
        <div className="login3">
          <h1 className="loginsign"> Login or sign up to continue </h1>
          <p className="qrscan">Scan QR code or enter phone number to login</p>
        </div>

        <div className="scanerdetail">
          <div className="hotscaner">
            <img src={HOTSTAR} className="qrscannerimg"></img>
            <h3> Use Camera App to Scan QR </h3>
            <p className="usecamera">
              Click on the link generated to redirect to Disney+ Hotstar mobile
              app
            </p>
          </div>

          <div className="formdetail">
            <label className="country"> +91 </label>
            <input type="text" placeholder="Enter Email"></input>
            <p className="terms">
              By proceeding you confirm that you are above 18 years of age and
              age and agree to the Privacy <b>Policy & Terms of Use.</b>
            </p>

            <div className="loginhelp">
              <p className="having">
                Having throuble logging in?
                <a
                  href="https://help.hotstar.com/in/en/support/search?term=login"
                  target="new"
                  className="gethelp"
                >
                  <b> Get Help</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
