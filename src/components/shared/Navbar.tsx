import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { UserRound } from "lucide-react";
import { Button } from "../ui/button";
import supabase from "@/lib/supabaseClient";

type NavProps = {
  to: string;
  children: React.ReactNode;
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-white sticky top-0 w-full z-10 border-b-4 border-violet-600">
      <nav className="flex justify-between items-center py-3 px-4 md:px-8 container mx-auto">
        {/* Logo */}
        <div>
          <span className="font-bold text-xl md:text-2xl text-violet-700 cursor-pointer">
            Trevorblades
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className=" hidden md:flex gap-8 items-center">
          <Nav to="/trevo">Home</Nav>
          <Nav to="/trevo/chat-ai">Chat-AI</Nav>
        </div>

        {/* user profile */}
        <div className="flex-1 md:flex-grow-0 justify-end flex gap-4 items-center text-violet-700 me-2">
          <span className="text-lg font-semibold">Arie</span>
          <UserRound size={40} className="border-2 rounded-full"/>
          <Button onClick={handleLogout}>Logout</Button>
        </div>

        <div className="md:hidden">
          <Menu size={30} className="cursor-pointer" onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="flex flex-col items-center bg-white py-4 space-y-3 md:hidden text-lg">
            <Nav to="/trevo">Home</Nav>
            <Nav to="/trevo/chat-ai">Chat-AI</Nav>
          </div>
        )}
    </header>
  );
};

const Nav: React.FC<NavProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-violet-700 transition-all"
          : "text-lg font-medium text-violet-600 hover:text-violet-700 hover:font-semibold transition-all"
      }
    >
      {children}
    </NavLink>
  );
};
