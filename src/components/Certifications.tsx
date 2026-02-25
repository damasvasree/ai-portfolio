import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 md:px-20 relative overflow-hidden">

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-20"
      >
        Certifications
      </motion.h2>

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative group
            p-[2px] rounded-3xl
            bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500
            shadow-[0_0_60px_rgba(6,182,212,0.5)]
          "
        >
          {/* Glass Card */}
          <div
            className="
              relative p-10 rounded-3xl
              bg-white/80 dark:bg-[#0F172A]/80
              backdrop-blur-2xl
            "
          >

            {/* Glow Hover Layer */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20
              blur-2xl transition duration-500
            " />

            {/* CONTENT */}
            <div className="relative z-10">

              <div className="flex items-center gap-4 mb-4">

  {/* IBM LOGO */}
  <img
    src="/ibm.jpg"
    alt="IBM"
    className="
  w-12 h-12 object-contain
  transition duration-300
  hover:scale-110
  hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.9)]
"
  />

  {/* TITLE */}
  <h3 className="text-2xl font-semibold text-cyan-400">
    IBM Professional Machine Learning Certificate
  </h3>

</div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Completed an industry-recognized Machine Learning specialization covering 
                supervised learning, unsupervised learning, model evaluation, 
                deployment strategies, and production-level ML workflows.
              </p>
              
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Verified professional certification issued by IBM via Coursera.
            </p>
              

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-2 rounded-full text-sm 
                  bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                  Machine Learning
                </span>

                <span className="px-4 py-2 rounded-full text-sm 
                  bg-purple-500/10 text-purple-400 border border-purple-400/30">
                  IBM Certified
                </span>

                <span className="px-4 py-2 rounded-full text-sm 
                  bg-gray-500/10 text-gray-400 border border-gray-400/30">
                  Coursera Verified
                </span>
              </div>

              <a
                href="https://www.coursera.org/account/accomplishments/specialization/7EQOQPPOYE2K"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block px-6 py-3 rounded-xl
                  bg-cyan-500 hover:bg-cyan-400
                  text-black font-medium
                  transition-all duration-300
                  hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]
                "
              >
                View Official Certificate
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}