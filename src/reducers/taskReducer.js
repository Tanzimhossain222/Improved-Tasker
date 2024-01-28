
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            const newTask = action.payload;
            return {
                ...state,
                tasks: [...state.tasks, newTask],
                isModalOpen: false,
            };
        }

        case 'DELETE_TASK': {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            }
        }

        case "SEARCH_TASK": {
            const searchText = action.payload.toLowerCase();
            const searchResults = state.tasks.filter((task) =>
                task.title.toLowerCase().includes(searchText)
            );

            return {
                ...state,
                searchResults: searchResults,
                showNoTaskFound: searchResults.length === 0,
              };
        }

        case "CLEAR_SEARCH": {
            return { ...state, searchResults: [], showNoTaskFound: false};
        }

        case "OPEN_MODAL": {
            return { ...state, isModalOpen: true };
        }

        case "CLOSE_MODAL": {
            return { ...state, isModalOpen: false };
        }

        case "DELETE_ALL_TASKS": {
            return { ...state, tasks: [] };
        }

        case "TOGGLE_FAVORITE_TASK": {
            const taskId = action.payload;
            const updatedTasks = state.tasks.map((task) =>
                task.id === taskId ? { ...task, isFav: !task.isFav } : task
            );
            return { ...state, tasks: updatedTasks };
        }

        case "SET_EDIT_TASK": {
            return { ...state, editTask: action.payload };
        }

        case "EDIT_TASK": {
            const editedTask = action.payload;
            const updatedTasks = state.tasks.map((task) =>
                task.id === editedTask.id ? editedTask : task
            );

            return { ...state, tasks: updatedTasks, editTask: null };
        }


        default:
            return state;
    }
};

export default taskReducer;
