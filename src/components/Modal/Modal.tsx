import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import "./index.css";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

interface IOwnProps {
  handleClose: () => void;
  handleGenerateClick: () => void;
  text?: string;
}

const Modal = ({ handleClose, handleGenerateClick, text }: IOwnProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient flex flex-col justify-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p
          className="h-10 text-center align-middle cursor-pointer"
          onClick={handleGenerateClick}
        >
          {text}
        </p>
        <motion.svg
          onClick={handleClose}
          whileTap={{ scale: 0.8 }}
          className="absolute bottom-0 text-center left-0 right-0 m-auto"
          width="100"
          height="30"
          viewBox="50 0 100 30"
          initial="hidden"
          animate="visible"
        >
          <motion.line
            x1="92"
            y1="3"
            x2="106"
            y2="17"
            stroke="#ffffee"
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="92"
            y1="17"
            x2="106"
            y2="3"
            stroke="#ffffee"
            variants={draw}
            custom={2}
          />
        </motion.svg>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
