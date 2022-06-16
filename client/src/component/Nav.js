
import { Link } from "react-router-dom";


const Nav = () => {
  const doc = document;
  const menuOpen = doc.querySelector(".menu");
  const menuClose = doc.querySelector(".close");
  const overlay = doc.querySelector(".overlay");

  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });

  // <script type="text/javascript" src="mobile.js"></script>
  // <Link class="logo" to="/"><img src="logo.svg" alt="logo"/></Link>
  return (
    <>
      <header>
        <nav>
          <ul class="nav__links">
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="#">Projects</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </nav>
        <Link class="cta" to="#">
          Contact
        </Link>
        <p class="menu cta">Menu</p>
      </header>
      <div id="mobile__menu" class="overlay">
        <Link class="close">&times;</Link>
        <div class="overlay__content">
          <Link to="#">Services</Link>
          <Link to="#">Projects</Link>
          <Link to="#">About</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
