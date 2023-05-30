import type { Component } from "solid-js";

type PointProps = { point: string };

const Points: Component<PointProps> = (props) => {
  return (
    <button class="border-2 border-slate-900 rounded-sm p-10 m-1 w-24 h-32 flex justify-center">
      <span class="text-3xl font-bold text-slate-900">{props.point}</span>
    </button>
  );
};

const PointsWrapper: Component = () => {
  const points = ["0", "1/2", "1", "2", "3", "5", "8", "13", "20", "40", "100", "?"];

  return (
    <div class="w-content full grid grid-cols-6 gap-0">
      {points.map((p, idx) => (
        <Points point={p} />
      ))}
    </div>
  );
};

const PokerPlanner: Component = () => {};

const App: Component = () => {
  return (
    <div class="flex">
      <PointsWrapper />
    </div>
  );
};

export default App;
