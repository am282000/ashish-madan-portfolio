// ==================== ANIMATED GREETING CHARACTER ====================
import { motion } from "framer-motion";

const AnimatedCharacter = () => {
  return (
    <motion.svg
      viewBox="0 0 200 400"
      className="w-40 h-80 md:w-48 md:h-96"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.2,
      }}
    >
      {/* Head */}
      <motion.circle
        cx="100"
        cy="60"
        r="35"
        className="fill-yellow-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />

      {/* Eyes */}
      <motion.circle
        cx="85"
        cy="50"
        r="6"
        className="fill-gray-900"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      />
      <motion.circle
        cx="115"
        cy="50"
        r="6"
        className="fill-gray-900"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      />

      {/* Smile */}
      <motion.path
        d="M 85 65 Q 100 75 115 65"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-gray-900"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />

      {/* Body */}
      <motion.rect
        x="75"
        y="100"
        width="50"
        height="80"
        className="fill-blue-500"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ transformOrigin: "center top" }}
      />

      {/* Left Arm */}
      <motion.rect
        x="50"
        y="110"
        width="25"
        height="60"
        className="fill-yellow-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        style={{ transformOrigin: "right center" }}
      />

      {/* Right Arm (Waving) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <motion.rect
          x="125"
          y="110"
          width="25"
          height="60"
          className="fill-yellow-300"
          style={{
            transformOrigin: "left center",
          }}
        />
      </motion.g>

      {/* Left Leg */}
      <motion.rect
        x="80"
        y="180"
        width="15"
        height="60"
        className="fill-gray-800"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ transformOrigin: "center top" }}
      />

      {/* Right Leg */}
      <motion.rect
        x="105"
        y="180"
        width="15"
        height="60"
        className="fill-gray-800"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ transformOrigin: "center top" }}
      />

      {/* Shoes */}
      <motion.rect
        x="75"
        y="240"
        width="20"
        height="12"
        className="fill-red-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        style={{ transformOrigin: "right center" }}
      />
      <motion.rect
        x="105"
        y="240"
        width="20"
        height="12"
        className="fill-red-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        style={{ transformOrigin: "left center" }}
      />
    </motion.svg>
  );
};

export default AnimatedCharacter;
