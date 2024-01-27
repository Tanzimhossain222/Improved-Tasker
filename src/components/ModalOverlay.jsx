import { useTaskContext } from "../context/TaskContext";
import TaskModal from "./Task/TaskModal";

const ModalOverlay = () => {
  const { state } = useTaskContext();
  const { isModalOpen } = state;

  return (
    isModalOpen && (
      <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute top-0 left-0 w-full h-4/5 bg-black opacity-70"></div>
          <TaskModal />
        </div>
      </>
    )
  );
};

export default ModalOverlay;
