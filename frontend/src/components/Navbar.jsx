import { NavLink, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <input type="text" placeholder="search" />
        <button>Search</button>
        <button>
          <NavLink to="/login">Login</NavLink>
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
