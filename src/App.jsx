import Page from "./Page";
import TaskProvider from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <Page />
    </TaskProvider>
  );
};

export default App;
