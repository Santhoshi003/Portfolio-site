import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "AWS",
    "Python",
    "Java",
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "MySQL"
  ];

  return (

    <section
      id="skills"
      className="bg-slate-950 py-24 px-6"
    >

      <motion.div
        initial={{ opacity:0, y:80 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className="max-w-6xl mx-auto"
      >

        <h2 className="text-4xl font-bold text-cyan-400 mb-16 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 rounded-2xl py-8 text-center shadow-lg"
            >

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;