import { motion } from "framer-motion";
import "./index.css";

interface IOwnProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Backdrop = ({ children, className, onClick }: IOwnProps) => {
  return (
    <motion.div
      onClick={onClick}
      className={`backdrop ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
