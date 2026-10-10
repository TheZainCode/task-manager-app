function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        disabled={currentFilter === "all"}
        onClick={() => onFilterChange("all")}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        All
      </button>

      <button
        disabled={currentFilter === "pending"}
        onClick={() => onFilterChange("pending")}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        Pending
      </button>

      <button
        disabled={currentFilter === "completed"}
        onClick={() => onFilterChange("completed")}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;