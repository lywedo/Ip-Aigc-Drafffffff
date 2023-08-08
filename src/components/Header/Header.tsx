import { AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

interface IOwnProps {
  className?: string;
  back?: () => void;
  close?: () => void;
  title?: string;
}

const Header = ({ className = '', back, close, title }: IOwnProps) => {
  return (
    <div className={`flex flex-row p-2 ${className}`}>
      {back ? (
        <div
          onClick={back}
          className="flex justify-center items-center text-xl cursor-pointer"
        >
          <AiOutlineLeft />
        </div>
      ) : (
        " "
      )}

      <div className="flex-grow text-center">{title || "一键图像生成"}</div>
      {close ? (
        <div className="text-xl cursor-pointer" onClick={close}>
          <AiOutlineClose />
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Header;
