
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
            const searchText = action.payload.toLowerCase().trim();
            const searchResults = state.tasks.filter((task) =>
                task.title.toLowerCase().includes(searchText)
            );
            return { ...state, searchResults };
        }

        case "CLEAR_SEARCH": {
            return { ...state, searchResults: [] };
        }

        case "OPEN_MODAL": {
            return { ...state, isModalOpen: true };
        }

        case "CLOSE_MODAL": {
            return { ...state, isModalOpen: false };
        }


        default:
            return state;
    }
};

export default taskReducer;
