import { motion } from "framer-motion";
import download from "@/assets/icons/download.svg";

const ImageDisplay = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-1 mx-3 my-4 pt-8 justify-items-center">
        <div className="col-span-3">
          <img
            className="rounded-xl"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="rounded-xl"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="rounded-xl"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="rounded-xl"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt=""
          />
        </div>
      </div>

      <motion.button
        className="w-48 md:w-60 h-14 bg-gradient-to-r from-[#b331b1] to-[#5dc043] text-white rounded-3xl relative -bottom-40"
        whileTap={{ scale: 0.8 }}
        onClick={() => navigate('/')}
      >
        完成创作
      </motion.button>

      <motion.img
        src={download}
        className="absolute w-12 right-2 bottom-40"
        whileTap={{ y: 10 }}
      />
    </div>
  );
};

export default ImageDisplay;
