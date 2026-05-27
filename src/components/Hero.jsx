import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function Hero() {

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6 py-20">

      {/* PARALLAX GLOW EFFECTS */}

      <Parallax speed={-20}>

        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      </Parallax>

      <Parallax speed={20}>

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      </Parallax>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity:0, x:-100 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">

            Laxmi
            <span className="block text-cyan-400">
              Santhoshi
            </span>

          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            AIML Student • AWS Cloud Enthusiast • Frontend Developer
          </h2>

          <p className="text-gray-400 text-lg leading-9 mb-10">

            Passionate about building scalable cloud applications,
            solving real-world problems, and creating modern web
            experiences using React, AWS, and Machine Learning.

          </p>

          <div className="flex flex-col md:flex-row gap-6">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Santhoshi003"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-4 rounded-2xl font-semibold transition duration-300"
            >
              GitHub Profile
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity:0, x:100 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="flex justify-center"
        >

          <div className="relative flex justify-center items-center">

            <div className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

            <img
              src="/profile.png"
              alt="Laxmi Santhoshi"
              loading="lazy"
              className="relative z-10 w-72 md:w-96 rounded-full border-4 border-cyan-400 shadow-2xl object-cover hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;