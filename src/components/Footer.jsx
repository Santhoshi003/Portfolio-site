import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-black border-t border-slate-800 py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}

        <div className="text-center md:text-left">

          <h2 className="text-3xl font-bold text-cyan-400 mb-3">
            Laxmi Santhoshi
          </h2>

          <p className="text-gray-400">
            AIML Student • AWS Cloud Enthusiast • Frontend Developer
          </p>

        </div>

        {/* CENTER LINKS */}

        <div className="flex gap-8 text-gray-300 font-medium">

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        {/* RIGHT SOCIAL ICONS */}

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Santhoshi003"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/santhoshi-anaparthi-164b72288/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:santhoshianaparthi@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="text-center text-gray-500 mt-10 border-t border-slate-800 pt-6">

        © 2026 Laxmi Santhoshi Anaparthi. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;