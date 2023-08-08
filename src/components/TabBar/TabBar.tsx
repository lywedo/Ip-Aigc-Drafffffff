import "./TabBar.css";

interface IOwnProps {
  handleBtnClick: () => void;
}

const TabBar = ({ handleBtnClick }: IOwnProps) => {
  return (
    <>
      <menu className="w-full h-16 md:h-22 md:w-[500px] absolute rounded-t-2xl bottom-0 flex justify-around m-0 items-center bg-[#1d1d27] text-cyan-50 text-xs">
        <button>
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 bg-slate-500 rounded-full"></div>
            <span className="pt-1">情感广场</span>
          </div>
        </button>
        <button className="menu-item" onClick={handleBtnClick}>
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1454"
            width="32"
            height="32"
          >
            <path
              d="M460.8 51.2v409.6h-409.6A51.2 51.2 0 0 0 0 512a51.2 51.2 0 0 0 51.2 51.2h409.6v409.6A51.2 51.2 0 0 0 512 1024a51.2 51.2 0 0 0 51.2-51.2v-921.6A51.2 51.2 0 0 0 512 0a51.2 51.2 0 0 0-51.2 51.2z"
              fill="#eeeeee"
            ></path>
            <path
              d="M634.88 460.8m51.2 0l286.72 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-286.72 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z"
              fill="#eeeeee"
            ></path>
          </svg>
        </button>
        <button>
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 bg-slate-500 rounded-full"></div>
            <span className="pt-1">个人作品</span>
          </div>
        </button>
        <div
          className="menu-border h-4 w-[100px]"
          style={{ clipPath: "url(#menu)", transform: "translateX(-50%)" }}
        />
      </menu>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
    </>
  );
};

export default TabBar;
