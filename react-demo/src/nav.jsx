import "./nav.css";
import "./navbar.css";
import "./btn.css";
import "./text.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="Navbar">
        <span>Brand</span>
        <span>
          <Link className="text" to={"/home"}>
            Home
          </Link>
        </span>
        <span>
          <Link className="text" to={"/about"}>
            About
          </Link>
        </span>
        <span>
          <Link className="text" to={"/products"}>
            Products
          </Link>
        </span>
      </div>
      <button className="btn">Search</button>
    </div>
  );
}

export default Nav;
