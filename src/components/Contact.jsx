import { motion } from "framer-motion";

function Contact() {

  return (

    <section
      id="contact"
      className="bg-slate-950 py-24 px-6"
    >

      <motion.div
        initial={{ opacity:0, y:80 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className="max-w-4xl mx-auto text-center"
      >

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Feel free to connect with me for collaborations,
          opportunities, or discussions about technology.
        </p>

        <div className="flex flex-col gap-6 text-xl">

          <a
            href="mailto:santhoshianaparthi@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            santhoshianaparthi@gmail.com
          </a>

          <a
            href="https://github.com/Santhoshi003"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/santhoshi-anaparthi-164b72288/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn Profile
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;