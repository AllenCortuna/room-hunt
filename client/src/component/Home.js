import background from "./img/hBackground.jpg";
import Grid from "@mui/material/Grid";
import logo from "./img/logo.png";
import magnifying from "./img/magnifying.png";
import roomSet from "./img/room-set.png";
import logoIcon from "./img/logo-icon.png";
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
          <h3>Check Room Availability</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero est soluta pariatur sequi doloremque illo fugiat dolore ipsam, sint vero temporibus eum, provident, exercitationem distinctio quas dolorem fugit nemo veritatis.</p>
          <img src={roomSet} alt="" srcset=""/>
        </div>

        <div className="feature">

        </div>

        <div className="feature">

        </div>
      </div>
    </div>
  );
};
export default Home;
