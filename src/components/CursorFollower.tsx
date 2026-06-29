"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

type CursorFollowerProps = {
  isDark: boolean;
};

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    setReduced(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reduced;
};

const usePointerPosition = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const latestRef = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reducedMotion) return;

    const flush = () => {
      rafIdRef.current = null;
      if (latestRef.current) {
        setPosition(latestRef.current);
        latestRef.current = null;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      latestRef.current = { x: event.clientX, y: event.clientY };
      if (rafIdRef.current !== null) return;
      rafIdRef.current = window.requestAnimationFrame(flush);
    };

    const handlePointerLeave = () => {
      latestRef.current = null;
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      setPosition(null);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("mouseleave", handlePointerLeave);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      latestRef.current = null;
    };
  }, [reducedMotion]);

  return { position, reducedMotion };
};

const CursorFollower = ({ isDark }: CursorFollowerProps) => {
  const { position, reducedMotion } = usePointerPosition();
  const [eyeAngle, setEyeAngle] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !position || reducedMotion) return;
    const interval = window.setInterval(() => {
      setEyeAngle(Math.random() * 40 - 20);
    }, 1500);
    return () => window.clearInterval(interval);
  }, [mounted, position, reducedMotion]);

  if (!mounted || reducedMotion) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 pointer-events-none select-none"
      animate={{
        x: position ? position.x + 35 : -100,
        y: position ? position.y + 25 : -100,
        opacity: position ? 1 : 0,
        scale: position ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 24,
        mass: 0.6,
        opacity: { duration: 0.175 },
        scale: { duration: 0.175 },
      }}
      style={{
        filter: isDark
          ? "drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))"
          : "drop-shadow(0 0 15px rgba(6, 182, 212, 0.25))",
        willChange: "transform, opacity",
      }}
      aria-hidden="true"
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill={isDark ? "#1e293b" : "#fef3c7"}
          stroke={isDark ? "#06b6d4" : "#f59e0b"}
          strokeWidth="2.5"
          whileHover={{ scale: 1.1 }}
        />

        <motion.g
          animate={{ rotate: eyeAngle }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformOrigin: "35px 40px" }}
        >
          <ellipse
            cx="35"
            cy="40"
            rx="10"
            ry="12"
            fill={isDark ? "#f1f5f9" : "white"}
          />
          <circle cx="35" cy="40" r="5" fill={isDark ? "#0f172a" : "#1e293b"} />
        </motion.g>

        <motion.g
          animate={{ rotate: eyeAngle }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformOrigin: "65px 40px" }}
        >
          <ellipse
            cx="65"
            cy="40"
            rx="10"
            ry="12"
            fill={isDark ? "#f1f5f9" : "white"}
          />
          <circle cx="65" cy="40" r="5" fill={isDark ? "#0f172a" : "#1e293b"} />
        </motion.g>

        <motion.path
          d="M 35 60 Q 50 75 65 60"
          fill="none"
          stroke={isDark ? "#06b6d4" : "#f59e0b"}
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            d: [
              "M 35 60 Q 50 75 65 60",
              "M 35 62 Q 50 78 65 62",
              "M 35 60 Q 50 75 65 60",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <ellipse
          cx="28"
          cy="55"
          rx="6"
          ry="4"
          fill={isDark ? "rgba(236, 72, 153, 0.3)" : "rgba(236, 72, 153, 0.2)"}
        >
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse
          cx="72"
          cy="55"
          rx="6"
          ry="4"
          fill={isDark ? "rgba(236, 72, 153, 0.3)" : "rgba(236, 72, 153, 0.2)"}
        >
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </ellipse>

        <g style={{ transformOrigin: "85px 20px" }}>
          <path
            d="M 85 15 L 87 20 L 92 22 L 87 24 L 85 29 L 83 24 L 78 22 L 83 20 Z"
            fill={isDark ? "#fbbf24" : "#f59e0b"}
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 85 20"
              to="360 85 20"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </motion.div>
  );
};

export default CursorFollower;