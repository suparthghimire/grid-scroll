import { PropsWithChildren } from "react";

const Child: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="w-[243px] h-[310px] bg-white/50 backdrop-blur-md flex flex-col justify-center gap-4 p-[20px] clip-card">
      <div className="w-[200px] h-[110px]">
        <img
          src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
          className="w-full h-full object-cover"
        />
      </div>
      {props.children}
      <div className="w-full flex items-center justify-between">
        <button className="px-3 py-4 bg-violet-600 text-white">
          Edit World
        </button>
        <p>Like</p>
      </div>
    </div>
  );
};

export default Child;
