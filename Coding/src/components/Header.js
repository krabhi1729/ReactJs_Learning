import Logo from "../assets/img/image.png";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header ">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <Link to="/cart">
          <li>Cart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

const Title = () => (
  <Link href="/">
    <img className="logo" alt="logo" src={Logo} />
  </Link>
);
export default Header;
