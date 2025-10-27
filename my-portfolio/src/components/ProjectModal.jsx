import React from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="bg-white rounded-xl max-w-3xl w-full p-6"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">Close</button>
        </div>
        <img src={project.image} alt={project.title} className="mt-4 rounded-md w-full h-64 object-cover" />
        <p className="mt-4 text-gray-600">{project.desc}</p>
      </motion.div>
    </div>
  );
}