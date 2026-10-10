import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
 const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: crypto.randomUUID(), title: "Learn React", completed: false },
          { id: crypto.randomUUID(), title: "Build Task Manager", completed: false }
        ];
  } catch {
    return [];
  }
});

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(title) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      }
    ]);
  }

  function handleToggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; 
  });

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="mx-auto max-w-xl bg-white p-6 shadow-md rounded-xl space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Task Manager App</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
      </section>
    </main>
  );
}

export default App;