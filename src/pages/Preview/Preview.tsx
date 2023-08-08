import { AnimatePresence, motion, Variants } from "framer-motion";
import "./index.css";
import ImageSwiper from "@/components/Swiper/Swiper";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const foods: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
];

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const Preview = () => {
  // const location = useLocation();

  const [selectedImage, setSelectedImage] = useState("");

  const handleImageSelect = (idx: number) => {
    setSelectedImage(foods[idx][0]);
  };

  return (
    <div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {selectedImage ? null : (
          <motion.div
            animate={{ opacity: selectedImage ? 0 : 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="container relative grid grid-cols-2 justify-items-center place-content-center h-screen gap-2"
          >
            {foods.map(([emoji, hueA, hueB], idx) => {
              const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(
                hueB
              )})`;
              return (
                <motion.div
                  key={emoji}
                  onClick={() => handleImageSelect(idx)}
                  style={{ background }}
                  className="card odd:justify-self-end even:justify-self-start"
                  variants={cardVariants}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 * idx,
                    ease: "easeIn",
                  }}
                >
                  {emoji}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      {selectedImage && (
        <div>
          <ImageSwiper handleBack={() => setSelectedImage("")} />
        </div>
      )}
    </div>
  );
};

export default Preview;
