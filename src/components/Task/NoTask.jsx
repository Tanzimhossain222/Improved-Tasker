const NoTask = () => {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td colSpan="6" className="text-center py-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl text-white font-semibold mb-4">
            No Tasks Found
          </h2>
          <p className="text-gray-400 mb-4">
            It seems like there are no tasks available at the moment.
          </p>
          <p className="text-gray-400">
            Add a task to get started and stay organized!
          </p>
        </div>
      </td>
    </tr>
  );
};

export default NoTask;
