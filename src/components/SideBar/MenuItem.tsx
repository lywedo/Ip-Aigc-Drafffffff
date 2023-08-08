import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }: { i: number }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="list-none mb-5 flex items-center cursor-pointer" 
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-10 h-10 rounded-full mr-5 flex " style={style} />
      <div className="flex-1 w-[200px] h-5 rounded" style={style} />
    </motion.li>
  );
};
