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
    //No se puede usar splice, ya que splice elimina el task que segun el task.id, y luego reordena el array de objetos task resultando que el indice del task dentro del array sea diferente a la propiedad id del task.
    //dataUpdated.splice(item.id, 1);

    const afterDeleteTask = dataUpdated.filter((task) => task.id !== item.id);
    setTasks(afterDeleteTask);
    console.log(
      `El valor del Id dentro de DeleteTask en Context es: ${item.id}`
    );
  };
  tasks.forEach((item) => console.log(item));
  //console.log(`La Cantidad de Elementos del array Task es: ${tasks.length}`);
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
