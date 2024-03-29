import ModalOverlay from "../ModalOverlay";
import TaskList from "./TaskList";
import TaskNav from "./TaskNav";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <ModalOverlay />

      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskNav />
          <TaskList />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
