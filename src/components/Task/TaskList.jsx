import { useTaskContext } from "../../context/TaskContext";
import StarIcons from "../svgIcons/StarIcons";
import NoTask from "./NoTask";
import TagList from "./TagList";

const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const { tasks, searchResults } = state;
  const isSearchActive = searchResults.length > 0;
  const displayData = isSearchActive ? searchResults : tasks;
  console.log(displayData);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      dispatch({ type: "DELETE_TASK", payload: id });
    }
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
                  <StarIcons isFav={task.isFav} />
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
                    <button className="text-blue-500">Edit</button>
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
