import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
function Navbar() {
  function handelClick() {
    const menuLinks = document.querySelector("#toggle");
    menuLinks.classList.toggle("hidden");
  }
  return (
    <nav className="md:shadow-md shadow-slate-200 sticky z-10">
      <div className="container flex justify-between items-center py-2 px-4 md:px-0 md:py-0 mx-auto">
        <div className="image">
          <img src={logo} alt="popcorn cartoon logo" className="w-16 md:w-24" />
        </div>
        <button onClick={handelClick} className="text-3xl md:hidden">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div
          className="links absolute top-20 right-0 w-screen shadow-md md:shadow-transparent shadow-slate-200 hidden md:block md:static bg-white"
          id="toggle"
        >
          <ul className="flex flex-col justify-center items-center gap-1 md:flex-row md:justify-end">
            <li className="px-8 py-2 rounded hover:bg-red-500 md:px-4 md:text-lg font-bold">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="px-8 py-2 rounded hover:bg-red-500 md:px-4 md:text-lg font-bold">
              <NavLink to="/watchlater">Watch Later</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
