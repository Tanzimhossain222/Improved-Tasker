import { toast } from "react-toastify";
import { useTaskContext } from "../../context/TaskContext";
import NoTask from "./NoTask";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const { tasks, searchResults, showNoTaskFound } = state;

  const tasksToRender = searchResults.length > 0 ? searchResults : tasks;

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

  const NoResult = () => {
    return <NoTask />;
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
          {showNoTaskFound ? (
            <NoResult />
          ) : tasksToRender.length > 0 ? (
            tasksToRender.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onToggleFavorite={handleToggleFavorite}
              />
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
