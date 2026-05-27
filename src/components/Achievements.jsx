import { motion } from "framer-motion";

function Achievements() {

  const achievements = [

    {
      title: "200+ LeetCode Problems",
      description:
        "Solved over 200 coding problems focusing on DSA and problem-solving skills."
    },

    {
      title: "1500+ GFG Contest Rating",
      description:
        "Achieved strong competitive coding performance on GeeksforGeeks contests."
    },

    {
      title: "3-Star HackerRank",
      description:
        "Earned 3-Star ratings in C, C++, and Python on HackerRank."
    },

    {
      title: "AWS & AI Innovation Challenge",
      description:
        "Winner at Reckoning – AWS & AI Innovation Challenge."
    }

  ];

  return (

    <section
      id="achievements"
      className="bg-slate-950 py-24 px-6"
    >

      <motion.div
        initial={{ opacity:0, y:80 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className="max-w-7xl mx-auto"
      >

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-3 transition duration-300 shadow-lg"
            >

              <h3 className="text-2xl font-bold mb-5 text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Achievements;