import StarIcons from "../svgIcons/StarIcons";
import TagList from "./TagList";

const TaskItem = ({ task, onDelete,onToggleFavorite,onEdit  }) => {
  return (
    <>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <StarIcons
            isFav={task.isFav}
            onToggle={() => onToggleFavorite(task.id)}
          />
        </td>
        <td>{task.title}</td>
        <td>
          <div>{task.description}</div>
        </td>
        <td>
          <TagList tags={task.tags} />
        </td>
        <td className="text-center">{task.priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              className="text-red-500"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
            <button
              className="text-blue-500"
              onClick={(e) => onEdit(e, task)}
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TaskItem;
