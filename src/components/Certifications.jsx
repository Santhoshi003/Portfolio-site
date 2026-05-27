import { motion } from "framer-motion";

function Certifications() {

  const certifications = [

    "AWS Certified AI Practitioner",
    "AWS Academy Cloud Foundations",
    "Oracle Certified Java Foundations",
    "Google Cloud Generative AI Leader",
    "Cisco Certified in Python and C++",
    "HackerRank SQL Intermediate Certification"

  ];

  return (

    <section
      id="certifications"
      className="bg-slate-900 py-24 px-6"
    >

      <motion.div
        initial={{ opacity:0, y:80 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className="max-w-6xl mx-auto"
      >

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (

            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-3 transition duration-300 shadow-lg text-center"
            >

              <h3 className="text-xl font-semibold text-white leading-8">
                {cert}
              </h3>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Certifications;