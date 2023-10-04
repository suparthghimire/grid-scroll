import { Space, ViewPort } from "react-zoomable-ui";
import Child from "../Child";

const Array_ = Array.from({ length: 100 }, (_, i) => i);

const initViewPort = (vp: ViewPort) => {
  const windowWidth = window.innerWidth;
  console.log({ windowWidth });
  vp.setBounds({ x: [-10, 3350], y: [-20, Infinity] });
};

const LargeAreaDemo = () => {
  return (
    <div className="w-full h-full relative">
      <Space onCreate={initViewPort}>
        <div className="grid grid-cols-[repeat(10,243px)] grid-rows-[repeat(10,310px)] gap-[100px]">
          {Array_.map((r) => (
            <Child key={`row-${r}`}>Hey Man</Child>
          ))}
        </div>
      </Space>
      <div className="absolute right-[10px] bottom-[80px]">
        <button className="p-3 bg-purple-500 rounded-xl text-white active:translate-y-[5px]">
          RECENTER
        </button>
      </div>
    </div>
  );
};

export default LargeAreaDemo;
