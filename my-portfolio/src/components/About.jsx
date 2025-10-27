import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function About() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
  ];

  const stats = [
    { label: "Years experience", value: "1+" },
    { label: "Projects shipped", value: "5+" },
    { label: "Open-source", value: "10 repos" },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* Left Section - About and Stats */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-tr from-purple-50 to-cyan-50 p-8 shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate and creative front-end engineer who builds accessible, performant interfaces and interactive web experiences. I enjoy working
            across the stack with a focus on component-driven UIs, animation,
            and design systems. I bring ideas to life using modern frameworks like React, and I am always on the lookout for new challenges that push me to grow and innovate.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/80 rounded-lg p-4 shadow-sm text-center"
              >
                <div className="text-sm text-gray-500">{s.label}</div>
                <div className="text-xl font-semibold text-gray-800">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="src/assets/resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
              download
            >
              <FaDownload />
              Resume
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Let's talk →
            </a>
          </div>
        </motion.div>

        {/* Right Section - What I Do, Skills, Quote */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="space-y-6"
        >
          <div className="rounded-2xl p-6 bg-white shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              What I Do
            </h3>
            <p className="text-gray-700">
              I help teams design and ship polished user experiences — from
              prototyping to production. My workflow includes component-driven
              development, visual polish with animation, and continuous
              performance improvements.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-white shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Tech & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Final Highlight / Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-purple-600 to-cyan-500 text-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Building for people, not just pixels.
            </h3>
            <p className="text-white/90 leading-relaxed">
              Every product I work on is guided by empathy, creativity, and a
              passion for crafting meaningful digital experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
