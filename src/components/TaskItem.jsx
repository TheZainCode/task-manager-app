function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className={`text-sm ${task.completed ? "text-green-600" : "text-amber-600"}`}>Status: {task.completed ? "Completed" : "Pending"}</p>
      </div>
      <div className="flex flex-wrap gap-2">
      <button onClick={() => onToggle(task.id)}
        className="rounded-md bg-green-600 px-3 py-2 text-sm text-white transition hover:bg-green-700">
        {task.completed ? "Mark Pending" : "Mark Complete"}
      </button>

      <button onClick={() => onDelete(task.id)}
      className="rounded-md bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;