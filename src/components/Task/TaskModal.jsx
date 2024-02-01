import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTaskContext } from "../../context/TaskContext";
const TaskModal = () => {
  const {
    dispatch,
    state: { editTask },
  } = useTaskContext();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    tags: [],
    priority: "",
    id: crypto.randomUUID(),
  });

  const [isEdit, setIsEdit] = useState(Object.is(editTask, null));

  useEffect(() => {
    // Update newTask when editTask changes
    setNewTask(
      editTask || {
        title: "",
        description: "",
        tags: [],
        priority: "",
        id: crypto.randomUUID(),
      }
    );
    setIsEdit(!isEdit);
  }, [editTask]);

  // Validity state for each input field
  const [titleValid, setTitleValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(true);
  const [tagsValid, setTagsValid] = useState(true);
  const [priorityValid, setPriorityValid] = useState(true);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    // Validate input and set validity state
    switch (name) {
      case "title":
        setTitleValid(value.trim() !== "");
        break;
      case "description":
        setDescriptionValid(value.trim() !== "");
        break;
      case "tags":
        setTagsValid(
          value.trim() !== "" &&
            value
              .trim()
              .split(",")
              .every((tag) => tag.trim() !== "")
        );
        value = value.split(",");

        break;
      case "priority":
        setPriorityValid(value.trim() !== "");
        break;
      default:
        break;
    }
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    // Validation
    const isTitleValid = newTask.title.trim() !== "";
    const isDescriptionValid = newTask.description.trim() !== "";
    const isTagsValid =
      newTask.tags.length > 0 && newTask.tags.every((tag) => tag.trim() !== "");
    const isPriorityValid = newTask.priority.trim() !== "";

    setTitleValid(isTitleValid);
    setDescriptionValid(isDescriptionValid);
    setTagsValid(isTagsValid);
    setPriorityValid(isPriorityValid);

    // Check if all fields are valid
    const isValid =
      isTitleValid && isDescriptionValid && isTagsValid && isPriorityValid;

    if (isValid) {
      if (editTask) {
        dispatch({ type: "EDIT_TASK", payload: newTask });
        toast.success("Task updated successfully!", {
          autoClose: 2000,
        });
      } else {
        dispatch({
          type: "ADD_TASK",
          payload: {
            ...newTask,
            id: crypto.randomUUID(),
          },
        });
        toast.success("Task added successfully!", {
          autoClose: 2000,
        });
      }

      // Reset the form and close the modal
      setNewTask({
        title: "",
        description: "",
        tags: [],
        priority: "",
        id: crypto.randomUUID(),
      });

      // Close the modal
      dispatch({ type: "CLOSE_MODAL" });
    } else {
      toast.error("Please fill all the fields!", {
        autoClose: 4000,
      });
    }
  };

  const handleCancelEdit = () => {
    // Clear the editTask in the context
    dispatch({ type: "SET_EDIT_TASK", payload: null });

    // Reset the local state for newTask
    setNewTask({
      title: "",
      description: "",
      tags: [],
      priority: "",
      id: crypto.randomUUID(),
    });

    // Close the modal
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <form
        className="relative z-10 mx-auto  my-10 w-full max-w-[740px] max-h-screen overflow-y-auto  rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
        onSubmit={handleAddTask}
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isEdit ? "Edit Task" : "Add New Task"}
        </h2>
        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              onChange={handleInputChange}
              value={newTask.title}
            />
            {!titleValid && (
              <p className="text-red-500">Title cannot be empty.</p>
            )}
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              onChange={handleInputChange}
              value={newTask.description}
            ></textarea>
            {!descriptionValid && (
              <p className="text-red-500">Description cannot be empty.</p>
            )}
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                onChange={handleInputChange}
                value={newTask.tags}
              />
              {!tagsValid && (
                <p className="text-red-500">Tags cannot be empty.</p>
              )}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                onChange={handleInputChange}
                value={newTask.priority}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              {!priorityValid && (
                <p className="text-red-500">Priority cannot be empty.</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {isEdit ? "Update Task" : "Create Task"}
          </button>

          <button
            type="button"
            className="rounded bg-red-500 px-4 py-2 text-white ml-4 transition-all hover:opacity-80"
            onClick={handleCancelEdit}
          >
            {isEdit ? "Cancel Edit" : "Cancel"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskModal;
