"use client";

import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Transition from "@/modules/Transition";

const MotionProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full" key={uuidv4()}>
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionProviders;
