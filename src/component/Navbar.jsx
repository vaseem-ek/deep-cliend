import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-3 px-3 md:px-20 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl md:text-2xl font-bold">
          DEEP NET SOFT
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <RxCross2 size={25} /> : <HiBars3BottomRight size={25} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto top-16 left-0 flex flex-col md:flex-row md:space-x-4 p-4 md:p-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <li>
            <Link onClick={() => setIsOpen(!isOpen)} to="/" className="text-white block py-2 px-4">
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(!isOpen)} to="/menu" className="text-white block py-2 px-4">
              MENU
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(!isOpen)} to="/make-restorent" className="text-white block py-2 px-4">
              MAKE A RESTAURANT
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(!isOpen)} to="/contact" className="text-white block py-2 px-4">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
