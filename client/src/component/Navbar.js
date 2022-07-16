import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = [
    {name: "Home",
      link: "/",
    },
    {name: "Expense",
      link: "/Expense",
    },
    {name: "Profit",
      link: "/Profit",
    },
    {name: "Login",
      link: "/Login",
    },
  ]
  return (
    <nav className="flex flex-row bg-gray-200 p-2 m-0 shadow-lg">
    {navbar.map((nav)=>(
      <Link className="uppercase text-teal-700 font-bold mr-3 hover:text-white hover:bg-teal-900 hover:rounded-sm" to={nav.link}>{nav.name}</Link>
    ))}
      
</nav>
  );
};

export default Navbar;
