// import React from "react";
// import { motion } from "framer-motion";

// export default function ProjectCard({ project, onOpen }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03, y: -6 }}
//       className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg"
//       onClick={onOpen}
//     >
//       <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition p-4 flex flex-col justify-end">
//         <div className="text-white">
//           <h3 className="text-lg font-semibold">{project.title}</h3>
//           <p className="text-sm opacity-90">{project.tags.join(" • ")}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg group focus:outline-none focus:ring-2 focus:ring-purple-500"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
        <div className="text-white">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm opacity-90">{project.tags.join(" • ")}</p>
        </div>
      </div>
    </motion.div>
  );
}
