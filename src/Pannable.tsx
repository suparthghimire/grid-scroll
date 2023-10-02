import BubbleUI from "react-bubble-ui";
import Child from "./Child";
import X from "react-bubble-ui-v2";

const y = X;
// import "react-bubble-ui/dist/index.css";
// import ChildComponentSquare from "./ChildComponentSquareCopper";
// import { data } from "./data";
// import "./styles.css";
// import { DndContext, Draggable } from "@dnd-kit/core";

// export default function App(props) {
//   const options = {
//     size: 243,
//     minSize: 50,
//     gutter: 200,
//     provideProps: true,
//     numCols: 20,
//     fringeWidth: 45,
//     yRadius: 1000,
//     xRadius: 1000,
//     cornerRadius: 50,
//     showGuides: false,
//     compact: true,
//     gravitation: 5
//   };

//   const children = data?.map((data, i) => {
//     return (
//       <ChildComponentSquare key={i} className="childComponent">
//         {data}
//       </ChildComponentSquare>
//     );
//   });

//   return (
//     <BubbleUI options={options} className="myBubbleUI">
//       {children}
//     </BubbleUI>
//   );
// }

const options = {
  size: 243,
  minSize: 50,
  gutter: 253,
  provideProps: true,
  numCols: 10,
  fringeWidth: 100,
  yRadius: 420,
  xRadius: 1000,
  cornerRadius: 10,
  showGuides: false,
  compact: true,
  gravitation: 5,
  loop: true,
};

type T_DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const thousandElemArr = Array.from({ length: 100 }).map(
  (_, idx) => `Item ${idx + 1}`
);

const PanningComponent: React.FC<T_DivProps> = () => {
  return (
    <div className="relative w-full">
      <BubbleUI
        options={options}
        className="w-full max-w-screen h-full pt-[40px]"
      >
        {thousandElemArr.map((elem) => (
          <Child key={elem}>{elem}</Child>
        ))}
      </BubbleUI>
    </div>
  );
};

export default PanningComponent;
