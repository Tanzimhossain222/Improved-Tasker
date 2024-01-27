import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import TaskProvider from "./context/TaskContext";
const App = () => {
  return (
    <TaskProvider>
      <Page />
      <ToastContainer />
    </TaskProvider>
  );
};

export default App;
