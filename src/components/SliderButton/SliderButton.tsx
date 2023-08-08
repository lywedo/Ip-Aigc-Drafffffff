import { useAnimation, motion, PanInfo } from "framer-motion";

interface IOwnProps {
  label: string;
  onConfirm: () => void;
}

const RIGHT_OFFSET = 200;

const SliderButton = ({ label, onConfirm }: IOwnProps) => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  const handlePan = (event: PointerEvent, info: PanInfo) => {
    const x = info.offset.x;
    if (x > 0) {
      controls.set({ x: x < RIGHT_OFFSET ? x : RIGHT_OFFSET });
    }
  };

  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    if (info.offset.x >= RIGHT_OFFSET) {
      onConfirm();
    } else {
      controls.start({ x: 0 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[260px] h-[60px] rounded-[50px] bg-[#00ccff]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-medium">{label}</div>
      <motion.div
        className="w-[60px] h-[60px] rounded-full bg-slate-300 touch-none"
        animate={controls}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
      />
    </div>
  );
};

export default SliderButton;
