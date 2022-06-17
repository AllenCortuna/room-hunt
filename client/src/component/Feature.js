import {Button} from "@mui/material";
// import magnifying from "./img/magnifying.png";
// import logoText from "./img/logoText.png";
// import background from "./img/hBackground.jpg";
import window from "./img/window.png";
import logoIcon from "./img/logoicon.png";
import couch from "./img/couch.png";
import furniture from "./img/furniture.png";
// <img src={logo} alt="" />
// <img src={background} alt="" />

const Feature = () => {
  return (
    <div className="Feature">
      <div className="header">
        <h3>Enjoy Room Hunt Features</h3>
      </div>

      {/*CONTENT */}
      <div className="content">
        {/*FEATURES */}
        <div className="feature">
          <h3>Check Prices</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Liberoestsoluta pariatur sequi doloremque illo provident, exercitationem .</p>
          <img src={couch} alt="" />
        </div>

        <div className="feature">
          <h3>Check Room Availability</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero est
soluta pariatur sequi doloremque illo provident, exercitationem
          </p>
          <img src={window} alt="" />
        </div>

        <div className="feature">
          <h3>See Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipsicing elit. Dignissimos quo laboriosam, maxime, provident modi qui dolore. Ipsum quasi,totam quas explicabo consectetur quo laborum nam!
          </p>
          <img src={furniture} alt="" />
        </div>

        {/*LOGO */}
        <div className="logo">
          <img src={logoIcon} alt="" />
        </div>
      </div>

      {/*GET STARTED */}
      <div className="get-started">
        <h5>See Available Rooms now!</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nobis molestias eveniet. Placeat nulla voluptatum, cupiditate corporis veniam fuga minus ullam sequi dicta natus, mollitia totam repudiandae optio necessitatibus doloribus.
        </p>
<Button variant="contained" color="secondary" size="sm"> Get Started</Button>
      </div>
    </div>
  );
};
export default Feature;