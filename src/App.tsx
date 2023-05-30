import { Component, createSignal, type Setter } from "solid-js";

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
      <h1 class="bg-gray-100 text-lg font-bold border-b border-b-slate-400 mb-4">
        Users
      </h1>
      <ul class="flex flex-col">
        {users.map((u, idx) => (
          <li class="text-md font-medium text-slate-900">{u}</li>
        ))}
      </ul>
    </div>
  );
};

const PokerPlanner: Component = () => {
  return (
    <>
      <UserList />
      <PointsWrapper />
    </>
  );
};

const CreateRoom: Component<{ setRoom: Setter<string> }> = (props) => {
  // TODO: Fix type!
  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      if (e.target.value.length !== 0) {
        props.setRoom(e.target.value);
      }
    }
  };

  return (
    <div class="flex border border-slate-500">
      <input
        class="p-2 outline-0"
        name="name"
        placeholder="Enter your name "
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

const App: Component = () => {
  const [room, setRoom] = createSignal<string>("");

  return (
    <div class="h-screen w-screen flex flex-row">
      <div class="max-w-7xl flex flex-row mx-auto my-auto">
        {room() === "" ? <CreateRoom setRoom={setRoom} /> : <PokerPlanner />}
      </div>
    </div>
  );
};

export default App;
