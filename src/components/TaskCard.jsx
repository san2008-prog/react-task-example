import PropTypes from "prop-types";

//export default function TaskCard({ task, deleteTask }) {
export default function TaskCard({ task }) {
  return (
    <div className="bg-gray-300 p-4 rounded-md">
      <h1 className="text-xl font-bold uppercase">{task.title}</h1>
      <p className="text-gray-800 text-base">{task.descripcion}</p>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    descripcion: PropTypes.string,
  }),
};
