import {
  Header,
  ImagePanel,
  Keyword,
  SliderButton,
} from "@/components/index";
import { useNavigate } from "react-router-dom";

function Generate() {
  const navigate = useNavigate();

  const confirmGenerate = () => {
    navigate("/preview", {
      state: {
        title: "你好",
      },
    });
  };

  return (
    <div className="relative bg-gradient-to-b h-screen from-[#3f1243] to-[#000] pb-4">
      <Header back={() => navigate('/')} className="text-white" />

      <div className="px-3 relative">
        <p className="my-1 mb-2 h-6 text-white">选择你的风格</p>

        <div className="">
          <ImagePanel />
        </div>

        <Keyword />

        <div className="flex z-[3333] justify-center fixed left-0 right-0 bottom-7 touch-none">
          <SliderButton label="开始召唤" onConfirm={confirmGenerate} />
        </div>
      </div>
    </div>
  );
}

export default Generate;
