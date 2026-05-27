import { motion } from "framer-motion";

function About() {

  return (

    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >

      <motion.div
        initial={{ opacity:0, x:-80 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className="max-w-5xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-9">

          I am an AIML student at Aditya College of Engineering
          and Technology with strong interest in AWS Cloud,
          frontend development, and machine learning.

          <br /><br />

          I enjoy building real-world applications using React,
          Python, and cloud technologies.

          <br /><br />

          I have hands-on experience with AWS services like
          EC2, S3, IAM, VPC, Rekognition, and Lambda.

          <br /><br />

          My goal is to become a skilled software engineer
          capable of building scalable and impactful solutions.

        </p>

      </motion.div>

    </section>
  );
}

export default About;