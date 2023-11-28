import { motion } from "framer-motion";

export default function NavigateAnimation({ children }) {
  return <motion.div {...Animations}>{children}</motion.div>;
}

const Animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
