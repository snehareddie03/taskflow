interface TaskCardProps {
  title: string;
  completed: boolean;
  onComplete: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TaskCard({
  title,
  completed,
  onComplete,
  onEdit,
  onDelete,
}: TaskCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4 shadow">
      <span
        className={`text-lg ${
          completed ? "line-through text-gray-500" : "font-semibold"
        }`}
      >
        {title}
      </span>

      <div className="space-x-2">
        <button
          onClick={onComplete}
          className="rounded bg-green-600 px-3 py-2 text-white"
        >
          {completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={onEdit}
          className="rounded bg-yellow-500 px-3 py-2 text-white"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="rounded bg-red-600 px-3 py-2 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
