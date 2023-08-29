import { useState } from "react";
import logo from '../assets/logo.png'

// import icons from react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {link: "Home", path: "home" },
    {link: "About", path: "about" },
    {link: "Services", path: "services" },
    {link: "Contact", path: "contact" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary">
        <div className="container mx-auto flex justify-between items-center text-lg font-medium">
          <div className="space-x-14 flex items-center">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="" className="w-10 inline-block items-center"/><span>XYZ</span></a>
          <ul className="md:flex space-x-12 hidden">
            
            {
                navItems.map(({link, path}) => <a key={link} href={path} className="block hover:text-gray-300">
                {link}
              </a> )
            }
          </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a href="/" className="hidden lg:flex items-center"> <GrLanguage className="mr-2"/> Language</a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sign up</button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark  className="h-6 w-6 text-primary"/>
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 p-4 bg-secondary ${isMenuOpen ? "block" : "hidden"}`}
      >
        {
                navItems.map(({link, path}) => <a 
                key={link} href={path} 
                onClick={toggleMenu}
                className="block text-white hover:text-gray-300"
                >
                {link}
              </a> )
            }
      </div>
    </>
  );
};

export default Navbar;
