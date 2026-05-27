import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO + IMAGE */}

        <div className="flex items-center gap-4">

          <img
            src="/profile.png"
            alt="Santhoshi"
            className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
          />

          <h1 className="text-3xl font-bold text-cyan-400">
            Santhoshi
          </h1>

        </div>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex gap-10 text-gray-300 font-medium">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden flex flex-col gap-6 px-6 py-6 bg-slate-900 text-gray-300">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;