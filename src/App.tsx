import PannableComponent from "./Pannable";

export default function App() {
  return (
    <main className="grid h-screen grid-rows-[75px_1fr] gap-[40px]">
      <header className="p-3  bg-neutral-800 grid items-center">Header</header>
      <PannableComponent />
    </main>
  );
}
