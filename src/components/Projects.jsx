import { motion } from "framer-motion";

function Projects() {

  const projects = [

    {
      title: "Offline AI Chatbot",
      description:
        "AI-powered offline chatbot using Ollama and Llama 3.2.",
      tech: "Python • Ollama • Llama",
      github: "https://github.com/Santhoshi003/offline_chatbot"
    },

    {
      title: "TOTP MFA Authentication",
      description:
        "Secure multi-factor authentication service using Redis.",
      tech: "Redis • Security • Backend",
      github: "https://github.com/Santhoshi003/TOTP-Based_Multi-Factor_Authentication"
    },

    {
      title: "AWS Face Recognition",
      description:
        "Attendance system using AWS Rekognition and Lambda.",
      tech: "AWS • Lambda • S3",
      github: null
    },

    {
      title: "Lost and Found Tracker",
      description:
        "AWS-based lost and found management platform.",
      tech: "AWS • React • DynamoDB",
      github: "https://github.com/Santhoshi003/Lost_and_Found"
    },

    {
      title: "ML Python Project",
      description:
        "Machine learning based Python project with automation.",
      tech: "Python • ML",
      github: "https://github.com/Santhoshi003/My-python-project"
    }

  ];

  return (

    <section
      id="projects"
      className="bg-slate-900 py-20 px-6"
    >

      <motion.div
        initial={{ opacity:0, y:60 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className="max-w-7xl mx-auto"
      >

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg flex flex-col justify-between"
            >

              <div>

                <h3 className="text-xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mb-4">
                  {project.description}
                </p>

                <p className="text-cyan-400 text-sm mb-6">
                  {project.tech}
                </p>

              </div>

              {project.github ? (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-center bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold transition"
                >
                  GitHub
                </a>

              ) : null}

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;