import { AnimatePresence } from "framer-motion";
import Modal from "../../components/Modal/Modal";
import { TabBar } from "../../components";
import useModal from "../../hooks/useModal";

function Home() {
  const { modalVisible, hidden, visible } = useModal();

  const navigate = useNavigate();

  const popData = {
    "prompt": ",(solo:1.5), (Detailed face description), (Beautiful  eyes:1.1), (full body:1.2), (masterpiece), (ultra-detailed), (chibi:1.2), 3d render, (Ultra detailed), volumetric soft light), (8K:1.1) <lora:blindbox_大概是盲盒_blindbox_v1_mix:0.9>  ",
    "negative_prompt": "watermark:1.5, worst quality:1.3, lowres, bad anatomy, duplicate:1.7, inaccurate limb and hand and finger and long fingernails, extra digit, worst quality, low quality, normal quality, signature, username, bad-hands-5, duplicate:1.7, extra digit, fewer digits, worst quality, low quality, normal quality, signature, username, extra fingers, fewer fingers, low quality, worst quality:1.4, bad anatomy, inaccurate limb:1.2, inaccurate eyes, extra digit, fewer digits, extra arms:1.2, easynegative, cat ear, cropped, jpeg artifacts, blurry,nsfw",
    "seed": "-1",
    "subseed": "-1",
    "batch_size": "4",
    "steps": 50,
    "cfg_scale": 7,
    "width": 512,
    "height": 512,
    "sampler_index": "DPM++ SDE Karras"
  }
  

  const handleGenerateClick = () => {
    navigate('/generate')
  };

  useEffect(()=>{
    getImg();
  }, []);

  async function getImg() {
    const transReq = await fetch(import.meta.env.VITE_TRANS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: "一个阳光大男孩" }),
    }).then((res) => res.json());

    const reqData = JSON.parse(JSON.stringify(popData));
    const prompt = transReq["tran"] + reqData["prompt"];
    console.log(prompt);
    reqData["prompt"] = prompt;
    const res = await fetch(import.meta.env.VITE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
    const json = await res.json();
    console.log(json)
  }

  return (
    <div className="relative flex items-center justify-center h-screen">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalVisible && (
          <Modal
            text="一键图像生成"
            handleClose={hidden}
            handleGenerateClick={handleGenerateClick}
          />
        )}
      </AnimatePresence>
      <TabBar handleBtnClick={visible} />
    </div>
  );
}

export default Home;
