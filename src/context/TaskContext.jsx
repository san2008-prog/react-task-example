import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { taskLists as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(data);
  const dataUpdated = tasks.slice();
  const addTask = (newTitle, newDescription) => {
    const newTask = {
      id: tasks.length,
      title: newTitle,
      descripcion: newDescription,
    };
    setTasks([...dataUpdated, newTask]);
  };
  const deleteTask = (item) => {
    dataUpdated.splice(item.id, 1);
    setTasks(dataUpdated);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

TaskContextProvider.propTypes = {
  children: PropTypes.node,
};
