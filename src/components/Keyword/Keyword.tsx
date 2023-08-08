import { motion, PanInfo, useAnimation } from "framer-motion";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Backdrop from "../Modal/Backdrop";
import useModal from "@/hooks/useModal";

const TOP_OFFSET = 300;
const THRESHOlD = 40;

const MIN_ROWS = 5;
const MAX_ROWS = 16;

const Keyword = () => {
  const [expanded, setExpanded] = useState(false);
  const [rows, setRows] = useState(MIN_ROWS);
  const keywordRef = useRef<HTMLTextAreaElement>(null);
  const controls = useAnimation();
  const { modalVisible, hidden, visible } = useModal();

  useEffect(() => {
    if (expanded) {
      setRows(MAX_ROWS);
    } else {
      setRows(MIN_ROWS);
    }
  }, [expanded])

  const handlePan = (event: PointerEvent, info: PanInfo) => {
    const y = info.offset.y;
    if (y < 0 && !expanded) {
      controls.set({ y: y < -THRESHOlD ? y : -THRESHOlD });
    } else if (y > 0 && expanded) {
      controls.set({ y: y < TOP_OFFSET ? -TOP_OFFSET + y : 0 });
    }
  };

  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    if (info.offset.y <= -THRESHOlD) {
      controls.start({ y: -TOP_OFFSET });
      setExpanded(true);
      visible();
    } else {
      controls.start({ y: 0 });
      setExpanded(false);
      hidden();
    }
  };

  const handleModalClick = () => {
    setTimeout(() => {
      hidden();
    }, 0);
    controls.start({ y: 0 });
  };

  return (
    <>
      {modalVisible && <Backdrop onClick={handleModalClick} />}

      <motion.div
        animate={controls}
        className="fixed z-[2222] touch-none h-screen px-4 left-0 right-0 top-[70%] bg-[#d9d9d9] rounded-t-lg shadow-[0_-25px_50px_15px_rgba(255,255,255,0.2)]"
      >
        <div className="grid grid-cols-3 py-2 justify-between touch-none">
          <p className="font-bold">关键提示词</p>

          <motion.div
            className="w-14 h-2 bg-[#e8e8e8] rounded-lg mx-auto mt-2"
            onPan={handlePan}
            onPanEnd={handlePanEnd}
          />

          <button
            type="button"
            className="flex flex-row justify-center items-center text-white h-7 px-1 rounded-full bg-[#999999] gap-1"
          >
            <FaWandMagicSparkles />
            <div>随机关键词</div>
          </button>
        </div>

        <div className="touch-none">
          <textarea
            ref={keywordRef}
            rows={rows}
            className="bg-[#d9d9d9] w-full outline-none touch-none"
            name="keyword"
            id="keyword"
            placeholder="在此输入关键词......"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Keyword;
