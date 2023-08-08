import { motion, useIsPresent } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import download from "../../assets/icons/download.svg";

import "swiper/css";
import "swiper/css/effect-coverflow";

import "./index.css";

import { EffectCoverflow } from "swiper/modules";
import { Header } from "..";
import { FC } from "react";

interface IOnwProps {
  handleBack: () => void;
}

const ImageSwiper: FC<IOnwProps> = ({ handleBack }) => {
  const isPresent = useIsPresent();
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="container"
      >
        <Header className="absolute w-full top-0" back={handleBack} />
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 10,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
          <SwiperSlide>
            <motion.img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="slide_image"
              initial={{ rotate: 10 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <motion.img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="slide_image"
              initial={{ rotate: 10 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <motion.img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="slide_image"
              initial={{ rotate: 10 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <motion.img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="slide_image"
              initial={{ rotate: 10 }}
            />
          </SwiperSlide>
        </Swiper>

        <motion.button
          className="w-48 md:w-60 h-14 bg-gradient-to-r from-[#b331b1] to-[#5dc043] text-white rounded-3xl relative -bottom-16"
          whileTap={{ scale: 0.8 }}
          onTap={() => navigate('/preview/gallery')}
        >
          查看IP原图
        </motion.button>

        <motion.img
          src={download}
          className="absolute w-12 right-2 bottom-40"
          whileTap={{ y: 10 }}
        />

        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </motion.div>

      <Outlet />
    </>
  );
};

export default ImageSwiper;
