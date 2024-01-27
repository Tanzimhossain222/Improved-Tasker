import { createContext, useContext, useReducer } from "react";
import getTasks from "../data/TaskData";
import taskReducer from "../reducers/taskReducer";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const initialTasks = getTasks();

  const initialState = {
    tasks: initialTasks,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export default TaskProvider;
