import { headerLogo } from "../assets/images";
import { closeMenu, hamburger, shoppingBag } from "../assets/icons";
import { navLinks } from "../constants";
import { useEffect, useRef, useState, useContext } from "react";
import { counterContext } from "./ShoeCard";

const Nav = ({ openBag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const counter = useContext(counterContext);

  useEffect(() => {
    console.log(counter);
  });

  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <img src={closeMenu} width={25} height={25} />
            ) : (
              <img src={hamburger} width={25} height={25} />
            )}
          </button>
        </div>
        <div
          ref={menuRef}
          className={`lg:flex lg:flex-row lg:items-center lg:w-auto w-full p-5 right-0 top-full menu-container ${
            isOpen ? "open" : "closed"
          }`}
        >
          <ul className=" flex justify-evenly w-full">
            {navLinks.map((item) => (
              <li key={item.label} className=" list-none inline-block mr-4">
                <a
                  href={item.href}
                  className=" font-montserrat leading-normal text-white hover:text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className=" relative">
            <img
              src={shoppingBag}
              alt="Shopping Bag"
              width={30}
              height={30}
              className=" mr-[10px] cursor-pointer"
              onClick={openBag}
            />
            <p className="absolute top-0 right-0 border rounded-full bg-red-700 text-white w-6 h-6 flex items-center justify-center text-xs pointer-events-none">
              {counter}
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
