'use client';

import { motion } from "framer-motion";

export const PremiumLoader = () => {
  return (
    <div className="relative h-screen w-full bg-background flex items-center justify-center overflow-hidden">

      <div className="relative flex flex-col items-center">

        {/* HEXAGON STACK */}
        <div className="relative w-[180px] h-[180px] mb-12">

          {/* Outer Hexagon */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 180 180"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }}
          >
            <polygon
              points="90,12 156,51 156,129 90,168 24,129 24,51"
              fill="none"
              stroke="hsl(var(--chocolate-light) / 0.5)"
              strokeWidth="1.2"
            />
          </motion.svg>

          {/* Middle Hexagon */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 180 180"
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" as const }}
          >
            <polygon
              points="90,27 144,57 144,123 90,153 36,123 36,57"
              fill="none"
              stroke="hsl(var(--chocolate))"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
          </motion.svg>

          {/* Inner Hexagon */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 180 180"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" as const }}
          >
            <polygon
              points="90,42 132,66 132,114 90,138 48,114 48,66"
              fill="none"
              stroke="hsl(var(--chocolate-deep) / 0.6)"
              strokeWidth="0.8"
            />
          </motion.svg>

          {/* SERIF STYLE "F" */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="64"
              height="80"
              viewBox="0 0 64 80"
              fill="none"
              className="drop-shadow-[0_4px_16px_hsl(var(--chocolate)/0.15)]"
            >
              <path
                d="
                  M18 14 
                  H48 
                  V20 
                  H26 
                  V34 
                  H44 
                  V40 
                  H26 
                  V66 
                  H18 
                  Z
                "
                fill="hsl(var(--chocolate))"
              />
            </svg>
          </div>

        </div>

        {/* PROGRESS LINE */}
        <div className="w-52 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full w-1/3 
                       bg-gradient-to-r from-transparent via-[hsl(var(--accent))] to-transparent"
            animate={{ x: ["-100%", "300%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear" as const
            }}
          />
        </div>

      </div>
    </div>
  );
};