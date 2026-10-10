import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return; 
    onAddTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        placeholder="Enter a new task..."
        onChange={(e) => setText(e.target.value)}
        className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      <button type="submit" className="bg-blue-600 rounded-lg px-4 py-2 font-medium text-white transition hover:bg-blue-700">Add Task</button>
    </form>
  );
}

export default TaskForm;