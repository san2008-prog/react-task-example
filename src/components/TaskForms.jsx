import { useState, useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForms() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const inputRef = useRef(null);
  const { addTask } = useContext(TaskContext);

  function handleTitleChange(e) {
    setNewTitle(e.target.value);
  }
  function handleDescriptionChange(e) {
    setNewDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(newTitle, newDescription);
    setNewTitle("");
    setNewDescription("");
    inputRef.current.focus();
  }

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4"
      >
        <h1 className="text-xl font-bold text-white py-2">Crear Tarea</h1>
        <input
          ref={inputRef}
          placeholder="Ingrese nueva tarea"
          onChange={handleTitleChange}
          value={newTitle}
          className="bg-slate-200 w-full p-2 mx-auto mb-4"
        />

        <textarea
          placeholder="Ingrese la descripcion"
          onChange={handleDescriptionChange}
          value={newDescription}
          className="bg-slate-200 w-full p-2 mx-auto mb-4 "
        />
        <button
          type="Submit"
          className="bg-blue-500 mx-auto px-4 py-2 hover:bg-blue-400 rounded-md text-white"
        >
          {" "}
          Nueva tarea{" "}
        </button>
      </form>
    </div>
  );
}
