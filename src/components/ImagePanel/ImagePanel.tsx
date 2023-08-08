import { motion, useScroll, useSpring } from "framer-motion";
import style1 from "@/assets/images/01.jpg";
import style2 from "@/assets/images/02.jpg";
import style3 from "@/assets/images/03.jpg";
import style4 from "@/assets/images/04.jpg";
import style5 from "@/assets/images/05.jpg";
import style6 from "@/assets/images/06.jpg";

const STYLEIMAGES = [style1, style2, style3, style4, style5, style6];

const ImagePanel = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-5 h-[calc(70vh-5rem)] overflow-y-scroll pb-2">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 origin-[0%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ scaleX }}
        />
        {STYLEIMAGES.map((imgSrc, index) => {
          return (
            <motion.div key={index} onClick={() => console.log(1)}>
              <img className="rounded-xl" src={imgSrc} alt="" />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default ImagePanel;
