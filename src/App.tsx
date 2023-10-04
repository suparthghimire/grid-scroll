import PannableComponent from "./Pannable";
import LargeAreaDemo from "./zoomable/LargeArea";

export default function App() {
  return (
    <main className="grid h-screen grid-rows-[75px_1fr]">
      <header className="p-3  bg-neutral-900 grid items-center text-white">
        Header
      </header>
      <div className="relative  p-3">
        <LargeAreaDemo />
      </div>
    </main>
  );
}
