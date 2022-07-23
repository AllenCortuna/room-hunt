import { Link } from "react-router-dom";


const Navbar = () => {
  const navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Record",
      link: "/record",
    },
    {
      name: "Chart",
      link: "/chart",
    },
    {
      name: "login",
      link: "/login",
    },
  ];
  return (
    <nav className="flex flex-row bg-black h-10 top-0 w-full justify-around items-center p-2 shadow-md ">
      {navbar.map((nav) => (
        <div className="nav-link flex group">
          <Link to={nav.link}>{nav.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
