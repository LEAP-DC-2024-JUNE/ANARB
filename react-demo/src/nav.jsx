import "./nav.css";
import "./navbar.css";
import "./btn.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="Navbar">
        <span>Brand</span>
        <span>Home</span>
        <span>About</span>
        <span>Products</span>
      </div>
      <button className="btn">Search</button>
    </div>
  );
}

export default Nav;
