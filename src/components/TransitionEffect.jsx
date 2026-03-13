'use client';
import { motion } from 'framer-motion';

const TransitionEffect = () => (
  <>
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-30 bg-primary"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: [0, 1, 1, 0], originX: [0, 0, 1, 1] }}
      transition={{ duration: 1.2, ease: 'easeInOut', times: [0, 0.45, 0.55, 1] }}
    />
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-20 bg-light dark:bg-dark"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: [0, 1, 1, 0], originX: [0, 0, 1, 1] }}
      transition={{ duration: 1.2, ease: 'easeInOut', times: [0, 0.45, 0.55, 1], delay: 0.15 }}
    />
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-dark dark:bg-light"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: [0, 1, 1, 0], originX: [0, 0, 1, 1] }}
      transition={{ duration: 1.2, ease: 'easeInOut', times: [0, 0.45, 0.55, 1], delay: 0.3 }}
    />
  </>
);

export default TransitionEffect;
