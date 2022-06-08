import { Link } from "react-router-dom";
const Navbar = () => {
  const toggleBtn = (e) => {
    var menu = document.querySelector(".nav-menu");
    var btn = document.querySelector(".nav-btn");

    menu.classList.toggle("is-active");
    btn.classList.toggle("is-active");
    e.preventDefaul();
  };

  return (
    <span>
      <div className="nav-btn" onClick={toggleBtn}>
        <span></span>
        <span></span>
      </div>

      <div className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </span>
  );
};

export default Navbar;
