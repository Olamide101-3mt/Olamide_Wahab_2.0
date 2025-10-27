import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBlob() {
  const blobVariants = {
    animate: {
      d: [
        "M421,301Q393,352,344,374.5Q295,397,243.5,409Q192,421,146.5,394.5Q101,368,78,320Q55,272,78.5,221Q102,170,150.5,150Q199,130,247.5,116Q296,102,339.5,125.5Q383,149,414.5,186Q446,223,421,301Z",
        "M423,300Q391,349,346,362Q301,375,243,393Q185,411,142,380Q99,349,75,300Q51,251,83,206Q115,161,163,141Q211,121,260,105Q309,89,353.5,113Q398,137,419,183Q440,229,423,300Z",
        "M423,300Q396,355,344,374Q292,393,245,398Q198,403,150,378Q102,353,78,304Q54,255,90,211Q126,167,174,148Q222,129,267,116Q312,103,353,122Q394,141,418,183Q442,225,423,300Z"
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <svg viewBox="0 0 500 500" className="absolute -top-8 -left-8 w-96 h-96">
      <motion.path
        d="M421,301Q393,352,344,374.5Q295,397,243.5,409Q192,421,146.5,394.5Q101,368,78,320Q55,272,78.5,221Q102,170,150.5,150Q199,130,247.5,116Q296,102,339.5,125.5Q383,149,414.5,186Q446,223,421,301Z"
        variants={blobVariants}
        animate="animate"
        fill="url(#grad)"
        style={{ filter: "blur(14px)" }}
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}