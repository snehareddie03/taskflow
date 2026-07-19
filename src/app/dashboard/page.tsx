"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  fetch("/api/tasks")
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .catch(() => {
       setError("Failed to load tasks.");
    })
    .finally(() => setLoading(false));
  }, []);

  
  
  const addOrUpdateTask = async () => {
    if (!title.trim()) return;

    if (editIndex !== null) {
      const updatedTask = {
        ...tasks[editIndex],
        title,
        description,
      };

      await fetch("/api/tasks", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      const updated = [...tasks];
      updated[editIndex] = updatedTask;
      setTasks(updated);
      setEditIndex(null);
    } else {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    }

    setTitle("");
    setDescription("");
  };

  const deleteTask = async (index: number) => {
    const task = tasks[index];

    await fetch("/api/tasks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: task.id,
      }),
    });

    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completeTask = async (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;

    await fetch("/api/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated[index]),
    });

    setTasks(updated);
  };

  const editTask = (index: number) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditIndex(index);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    if (filter === "Completed") {
      return matchesSearch && task.completed;
    }

    if (filter === "Pending") {
      return matchesSearch && !task.completed;
    }

    return matchesSearch;
  });

    if (loading) {
    return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">Loading...</h1>
    </div>
  );
}

    if (error) {
    return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">{error}</h1>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>

      <div className="bg-white p-6 rounded shadow mb-6">
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3 rounded"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addOrUpdateTask}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      <input
        className="border p-2 w-full rounded mb-4"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter("All")}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("Pending")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Completed
        </button>
      </div>

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="rounded-lg bg-white p-6 text-center shadow">
           <h2 className="text-xl font-semibold text-gray-600">
             No tasks found.
           </h2>
         </div>
       ) : (
        filteredTasks.map((task, index) => (
          <div key={task.id} className="bg-white p-5 rounded shadow">
            <h2
              className={`text-xl font-bold ${
                task.completed ? "line-through text-green-600" : ""
              }`}
            >
              {task.title}
            </h2>

            <p>{task.description}</p>

            <p className="text-sm text-gray-500 mt-2">
              Created: {new Date(task.createdAt).toLocaleString()}
            </p>

            <p className="mt-2">
              {task.completed ? "✅ Completed" : "⏳ Pending"}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => completeTask(index)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Complete
              </button>

              <button
                onClick={() => editTask(index)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
     )}
      </div>
    
     </div>
  );
}