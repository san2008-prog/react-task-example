import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function DeleteTasks({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <button
      onClick={() => deleteTask(task)}
      className="bg-red-500 rounded-md px-4 py-2 mt-4 hover:bg-red-400 text-white"
    >
      {" "}
      Eliminar tarea{" "}
    </button>
  );
}
DeleteTasks.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
