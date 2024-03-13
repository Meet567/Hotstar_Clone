import React from "react";
import "./HotstarApp.css";
import { NavLink } from "react-router-dom";
import HOTSTARLOGO from "../AssetsPic/Hotstarlogo.webp";

function HotstarApp() {
  return (
    <div>
      <div className="navbar ">
        <ul className="nav-item">
          <li>
            <img src={HOTSTARLOGO} className="hotstarlogo"></img>
          </li>
          <li className="subscribelink">
            <a href="https://www.hotstar.com/in/paywall" className="subscribe">
              Subscribe &nbsp;
              <i class="fa fa-chevron-right righticon" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="navbarlink"
              activeClassName="navbarlink-active"
            >
              <i class="fa fa-user-circle-o navbarlink" aria-hidden="true">
                &nbsp; <span className="navbtn"> My Space </span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/home"
              className="navbarlink"
              activeClassName="navbarlink-active"
            >
              <i class="fa fa-home navbarlink" aria-hidden="true">
                &nbsp;<span className="navbtn">Home</span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/tv"
              className="navbarlink"
              activeClassName="navbarlink-active"
            >
              <i class="fa fa-television navbarlink" aria-hidden="true">
                &nbsp; <span className="navbtn"> TV </span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies"
              className="navbarlink"
              activeClassName="navbarlink-active"
            >
              <i class="fa fa-film navbarlink" aria-hidden="true">
                &nbsp; <span className="navbtn"> Movies </span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/sports"
              className="navbarlink"
              activeClassName="navbarlink-active"
            >
              <i class="fa fa-gg-circle navbarlink" aria-hidden="true">
                &nbsp; <span className="navbtn"> Sports </span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/categories"
              className="navbarlink"
              activeClassName="navbarlink-active"
            >
              <i class="fa fa-windows navbarlink" aria-hidden="true">
                &nbsp; <span className="navbtn"> Categories </span>
              </i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HotstarApp;
