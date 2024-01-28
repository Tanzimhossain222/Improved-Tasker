import { createContext, useContext, useReducer } from "react";
import getTasks from "../data/TaskData";
import taskReducer from "../reducers/taskReducer";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const initialTasks = getTasks();

  const initialState = {
    tasks: initialTasks,
    searchResults: [],
    isModalOpen: false,
    editTask: null,
    showNoTaskFound : false,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export default TaskProvider;
