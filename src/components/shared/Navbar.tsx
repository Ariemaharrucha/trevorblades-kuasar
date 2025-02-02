import React from "react";
import { NavLink } from "react-router-dom";

type NavProps = {
    to: string;
    children: React.ReactNode;
  };

export const Navbar = () => {
  return (
    <header className="bg-white sticky top-0 w-full z-10">
        <nav className="flex justify-between items-center py-4 px-4 md:px-8 container mx-auto border-b-4 border-violet-600">
          {/* Logo */}
          <div>
            <span className="font-bold text-2xl text-violet-700 cursor-pointer">Trevorblades</span>
          </div>

          {/* Desktop Navigation */}
          <div className=" md:flex gap-8 items-center">
            <Nav to="/">Home</Nav>
            <Nav to="/chat-ai">Chat-AI</Nav>
          </div>

          {/* user profile */}
          {/* <div>
            profile
          </div> */}
        </nav>
    </header>
  );
};

const Nav:React.FC<NavProps> = ({to, children}) => {
  return (
    <NavLink
      to={to}
    className={({isActive}) => isActive ? "text-lg font-semibold text-violet-700 transition-all" : "text-lg font-medium text-violet-600 hover:text-violet-700 hover:font-semibold transition-all"}
    >
      {children}
    </NavLink>
  );
};
