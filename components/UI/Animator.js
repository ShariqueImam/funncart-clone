import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Animator = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default Animator;
