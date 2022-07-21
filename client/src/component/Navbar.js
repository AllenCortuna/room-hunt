import { Link } from "react-router-dom";
import { HomeIcon, ClipboardCheckIcon, UserCircleIcon, ChartSquareBarIcon } from '@heroicons/react/solid'
const Navbar = () => {
  const iconProperties = "text-secondary h-6 drop-shadow-md "
  const navbar = [{
    name: "Home",
    icon: <HomeIcon className={iconProperties} />,
    link: "/",
  },
    { name: "Record",
      icon: <ClipboardCheckIcon className={iconProperties} />,
      link: "/record"},
    {
      name: "Chart",
      icon: <ChartSquareBarIcon className={iconProperties} />,
      link: "/chart"},
    { 
      name: "login",
      icon: <UserCircleIcon className={iconProperties} />,
      link: "/login"}

  ];
  return (
    <nav className="flex flex-row bg-black h-10 top-0 w-full justify-around items-center drop-shadow-3xl p-2 ">

      {navbar.map((nav) => (
        <div className="nav-link flex group">
          <Link to={nav.link}>
            {nav.name}
          </Link>
        </div>
      ))}


    </nav>
  );
};

export default Navbar;
