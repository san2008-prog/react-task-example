import TaskCard from "./TaskCard";
import DeleteTasks from "./DeleteTasks";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskLists() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      {tasks.length < 1 && (
        <h1 className="text-4xl font-bold text-white text-center py-10">
          No hay Tareas que mostrar
        </h1>
      )}
      {tasks.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {tasks.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 p-4"
            >
              <TaskCard task={item} />
              <DeleteTasks task={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
