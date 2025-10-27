import React from "react";
import { motion } from "framer-motion";
import AnimatedBlob from "./AnimatedBlob";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-12 py-20">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hello, I'm <span className="text-purple-600">Olamide</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          I design and build beautiful, accessible, and performant web experiences.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end relative">
        <motion.div
          initial={{ scale: 0.96, rotate: -6 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="w-80 h-80 relative"
        >
          <AnimatedBlob />
          <div className="absolute inset-6 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/IMG_6480.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}