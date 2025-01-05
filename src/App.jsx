import TaskLists from "./components/TaskList.jsx";
import TaskForms from "./components/TaskForms.jsx";
export const App = () => {
  return (
    <main className="bg-slate-950 min-h-screen">
      <div className="container py-4 px-4 mx-auto">
        <TaskForms />
        <TaskLists />
      </div>
    </main>
  );
};
