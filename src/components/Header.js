import { useState } from "react";
import { CDN_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let btnName = "login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render")
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/home">Home</Link>
            </li>
          <li><Link to="/about">ABout Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
            //   btnName = "logout";
            //   console.log(btnName); // printed the latest update. But component doesnot gets rendered to reflect the changes.
             btnNameReact ==="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
