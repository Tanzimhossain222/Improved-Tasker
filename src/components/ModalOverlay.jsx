import { useTaskContext } from "../context/TaskContext";

const ModalOverlay = () => {
  const { state } = useTaskContext();
  const { isModalOpen } = state;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black opacity-50 z-50 transition-opacity ${
          isModalOpen ? "visible" : "invisible"
        }`}
      ></div>
    </>
  );
};

export default ModalOverlay;
