import { Space, ViewPort } from "react-zoomable-ui";
import Child from "../Child";

const Array_ = Array.from({ length: 50 }, (_, i) => i);

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
    </div>
  );
};

export default LargeAreaDemo;
