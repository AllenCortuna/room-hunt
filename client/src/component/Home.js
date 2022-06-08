import background from "./img/hBackground.jpg";
import Grid from "@mui/material/Grid";
import logo from "./img/logo.png";
import magnifying from "./img/magnifying.png";
import window from "./img/window.png";
import logoIcon from "./img/logo-icon.png";
import couch from "./img/couch.png"
import furniture from "./img/furniture.png"
// <img src={logo} alt="" />

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <img src={background} alt="" />
      </div>

      {/*CONTENT */}
      <div className="content">
        {/*FEATURES */}
        <div className="feature">
              <h3>Check Prices</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Liberoest soluta pariatur sequi doloremque illo provident, exercitationem .
              </p>
              <img src={couch} alt="" />
        </div>

        <div className="feature">
          <h3>See Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo laboriosam, maxime, provident modi qui dolore. Ipsum quasi, totam quas explicabo consectetur quo laborum nam!</p>
          <img src={furniture} alt=""/>
        </div>


        <div className="feature">
          <h3>Check Room Availability</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero est soluta pariatur sequi doloremque illo provident, exercitationem
          </p>
          <img src={window} alt="" srcset="" className="offset-bot" />
        </div>

        <div className="logo">
          <img src={logo} alt=""/>
        </div>

      </div>
      <div className="get-started">
        <h5>start exploring now</h5>

      </div>

    </div>
  );
};
export default Home;
