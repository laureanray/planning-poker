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
  const points = [
    "0",
    "1/2",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "20",
    "40",
    "100",
    "?",
  ];

  return (
    <div class="w-fit h-fit grid grid-cols-6 gap-0 bg-red-200">
      {points.map((p, idx) => (
        <Points point={p} />
      ))}
    </div>
  );
};

const UserList: Component = () => {
  const users = ["User 1", "User 2", "User 3", "User 4", "User 5", "User 6"];
  return (
    <div class="w-fit h-fit flex flex-col p-4 bg-gray-100">
      <h1 class="bg-gray-100 text-lg font-bold border-b border-b-slate-400 mb-4"> Users </h1>
      <ul class="flex flex-col">
        {users.map((u, idx) => (
          <li class="text-md font-medium text-slate-900">{u}</li>
        ))}
      </ul>
    </div>
  );
};

const PokerPlanner: Component = () => {};

const App: Component = () => {
  return (
    <div class="h-screen w-screen bg-gray-900 flex flex-row">
      <div class="max-w-7xl flex flex-row mx-auto my-auto">
        <UserList />
        <PointsWrapper />
      </div>
    </div>
  );
};

export default App;
