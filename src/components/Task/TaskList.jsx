import { toast } from "react-toastify";
import { useTaskContext } from "../../context/TaskContext";
import StarIcons from "../svgIcons/StarIcons";
import NoTask from "./NoTask";
import TagList from "./TagList";

const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const { tasks, searchResults } = state;
  const isSearchActive = searchResults.length > 0;
  const displayData = isSearchActive ? searchResults : tasks;

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      dispatch({ type: "DELETE_TASK", payload: id });
      toast.error("Task deleted successfully", {
        autoClose: 2000,
        transition: toast.Slide,
        position: "bottom-right",
      });
    }
  };

  const handleToggleFavorite = (id) => {
    dispatch({ type: "TOGGLE_FAVORITE_TASK", payload: id });
  };

  const handleEdit = (event, task) => {
    event.preventDefault();
    dispatch({ type: "SET_EDIT_TASK", payload: task });
    dispatch({ type: "OPEN_MODAL" });
  };

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>

        <tbody>
          {displayData.length > 0 ? (
            displayData.map((task) => (
              <tr
                key={task.id}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
              >
                <td>
                  <StarIcons
                    isFav={task.isFav}
                    onToggle={() => handleToggleFavorite(task.id)}
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
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-blue-500"
                      onClick={(e) => handleEdit(e, task)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <NoTask />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
