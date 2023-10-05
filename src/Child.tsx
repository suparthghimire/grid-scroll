import { PropsWithChildren } from "react";

const Child: React.FC<PropsWithChildren> = (props) => {
  return (
    <div
      className="w-[243px] h-[310px] gap-4 relative"
      style={{
        backgroundImage: "url('/component.svg')",
        filter: "drop-shadow(-4px 4px 8px rgba(32, 1, 99, 0.15))",
      }}
    >
      <div className="relative z-[99999] p-[20px] h-full w-full flex flex-col gap-[20px] justify-center">
        <p className="text-[18px] font-bold">{props.children}</p>
        <div className="w-[200px] h-[110px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1685276206577-b44f877bfad9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=110&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjQ4ODI3Nw&ixlib=rb-4.0.3&q=80&w=200"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <button className="px-4 py-2 rounded-lg bg-violet-600 hover:opacity-50 text-white active:translate-y-[1px]">
            Enter
          </button>
          <button className="active:translate-y-[2px]">❤️</button>
        </div>
      </div>
    </div>
  );
};

export default Child;
