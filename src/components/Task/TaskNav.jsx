import { useTaskContext } from "../../context/TaskContext";
import SearchTask from "./SearchTask";
import { toast } from 'react-toastify';

const TaskNav = () => {
  const { dispatch } = useTaskContext();

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const handleDeleteAllClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );

    if (isConfirmed) {
      dispatch({ type: "DELETE_ALL_TASKS" });
      toast.error("All tasks deleted successfully", {
        autoClose: 2400,
        transition: toast.Slide,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <SearchTask />
          <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={openModal}
          >
            Add Task
          </button>
          <button
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={handleDeleteAllClick}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskNav;
