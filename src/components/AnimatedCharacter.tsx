"use client";

import { motion } from "framer-motion";

interface AnimatedCharacterProps {
  isDark?: boolean;
}

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = () => {
  // Blinking animation variant
  const blinkVariant = {
    open: { scaleY: 1, transition: { duration: 0.1 } },
    closed: { scaleY: 0.1, transition: { duration: 0.1 } },
  };

  // Blink sequence
  const blinkSequence = [
    "open",
    "open",
    "open",
    "open",
    "open",
    "open",
    "open",
    "open",
    "open",
    "closed",
    "closed",
    "open",
  ];

  return (
    <motion.div
      className="flex items-center justify-center w-full h-full"
      animate={{
        y: [0, -20, 0],
        rotateZ: [0, 3, -3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 200 400"
        className="w-32 h-64 md:w-40 md:h-80 lg:w-48 lg:h-96 filter drop-shadow-lg"
      >
        {/* Head */}
        <circle cx="100" cy="60" r="35" fill="#fbbf24" />

        {/* Left Eye */}
        <motion.circle
          cx="85"
          cy="50"
          r="6"
          fill="#1f2937"
          variants={blinkVariant}
          initial="open"
          animate={blinkSequence}
          transition={{
            times: [
              0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 1,
            ],
            duration: 4,
            repeat: Infinity,
          }}
          style={{ originY: "50%" }}
        />
        <motion.circle
          cx="86"
          cy="48"
          r="2"
          fill="#ffffff"
          variants={blinkVariant}
          initial="open"
          animate={blinkSequence}
          transition={{
            times: [
              0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 1,
            ],
            duration: 4,
            repeat: Infinity,
          }}
          style={{ originY: "50%" }}
        />

        {/* Right Eye */}
        <motion.circle
          cx="115"
          cy="50"
          r="6"
          fill="#1f2937"
          variants={blinkVariant}
          initial="open"
          animate={blinkSequence}
          transition={{
            times: [
              0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 1,
            ],
            duration: 4,
            repeat: Infinity,
          }}
          style={{ originY: "50%" }}
        />
        <motion.circle
          cx="116"
          cy="48"
          r="2"
          fill="#ffffff"
          variants={blinkVariant}
          initial="open"
          animate={blinkSequence}
          transition={{
            times: [
              0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 1,
            ],
            duration: 4,
            repeat: Infinity,
          }}
          style={{ originY: "50%" }}
        />

        {/* Smile */}
        <path
          d="M 85 65 Q 100 75 115 65"
          stroke="#1f2937"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body */}
        <motion.rect
          x="75"
          y="100"
          width="50"
          height="80"
          rx="4"
          fill="#3b82f6"
          animate={{
            scaleY: [1, 0.95, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originY: "50%" }}
        />

        {/* Left Arm */}
        <motion.g
          animate={{
            rotateZ: [-15, 15, -15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: "62.5px", originY: "110px" }}
        >
          <rect x="50" y="110" width="25" height="70" rx="3" fill="#fbbf24" />
          <circle cx="60" cy="185" r="8" fill="#fbbf24" />
        </motion.g>

        {/* Right Arm */}
        <motion.g
          animate={{
            rotateZ: [15, -15, 15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: "137.5px", originY: "110px" }}
        >
          <rect x="125" y="110" width="25" height="70" rx="3" fill="#fbbf24" />
          <circle cx="140" cy="185" r="8" fill="#fbbf24" />
        </motion.g>

        {/* Left Leg */}
        <rect x="80" y="185" width="15" height="60" rx="2" fill="#1f2937" />

        {/* Right Leg */}
        <rect x="105" y="185" width="15" height="60" rx="2" fill="#1f2937" />

        {/* Left Shoe */}
        <rect x="75" y="247" width="20" height="12" rx="2" fill="#dc2626" />

        {/* Right Shoe */}
        <rect x="105" y="247" width="20" height="12" rx="2" fill="#dc2626" />
      </svg>
    </motion.div>
  );
};

export default AnimatedCharacter;
