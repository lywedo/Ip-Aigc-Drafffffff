import { motion, useIsPresent } from "framer-motion";
import { Header, ImageDisplay } from "@/components";

const Gallery = () => {
  const isPresent = useIsPresent();
  const navigate = useNavigate();

  return (
    <div className="absolute bg-white z-[5555] top-0 left-0 right-0 bottom-0 w-full h-full">
      <Header className="" back={() => navigate("/preview")} />

      <ImageDisplay />

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default Gallery;
