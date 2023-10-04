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
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            className="w-full h-full object-cover"
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
