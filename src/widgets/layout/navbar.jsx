import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ logo, brandName1, brandName2, brandName3, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1145 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize hover:text-red-700 font-semibold text-base"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
              <Link
                to={path}
                target={target}
                className="flex items-center gap-1 p-1 font-normal"
                smooth={true}
                duration={500}
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar className="p-3 pb-0.5 bg-gray-850 border-0 h-16">
      <div className="container mx-auto flex items-center justify-between text-black text-6xl">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-extrabold flex align-middle gap-2 text-2xl ">
           {logo} {brandName1} <span className=" text-deep-orange-500 ">{brandName2}</span> {brandName3}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex text-6xl">
          <a
            href="#"
            target="_blank"
          >
            {/* <Button variant="text" size="sm" color="white" fullWidth>
              Support Us
            </Button> */}
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="lg"
          color="red"
          className="ml-auto text-inherit hover:bg-red-700 focus:bg-red-700 active:bg-red-700  lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-red-400"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <a
            href="#"
            target="_blank"
            className="mb-2 block"
          >
            {/* <Button variant="text" size="sm" fullWidth>
              pro version
            </Button> */}
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  logo: (
    <img
        className="w-[33px] h-[35px] p-0"
        src='/img/favicon.png'>
    </img> 
  ),
  brandName1: "E",
  brandName2: "S",
  brandName3: "A",
  action: (
    <Link
      to="/sponsor"
      target=""
    >
      <Button className=" from-red-800 to-red-800 shadow-md shadow-red-800/20 hover:shadow-lg hover:shadow-red-700/40 active:opacity-[0.85] block w-full" variant="gradient" size="sm" fullWidth>
      Sponsor Us
    </Button>
    </Link>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
