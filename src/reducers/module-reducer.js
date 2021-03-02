// This reducer handles all states and action information for the ModuleList component

const initialState = {
    modules : [
        {_id: 123, title: "Module 1"},
        {_id: 234, title: "Module 2"},
        {_id: 345, title: "Module 3"},
        {_id: 456, title: "Module 4"},
        {_id: 567, title: "Module 5"}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            // New state includes all old modules plus a new dummy module
            const newStateAdd = {
                modules: [...state.modules,
                    {
                        _id: new Date().getTime(),
                        title: "New Module"
                    }]
            }
            return newStateAdd
        case "DELETE_MODULE":
            const newStateDelete = {
                modules: state.modules.filter(module => module._id !== action.moduleToDelete._id)
            }
            return newStateDelete
        case "UPDATE_MODULE":
            const newStateUpdated = {
                modules: state.modules.map(module => {
                    if (module._id === action.moduleToUpdate._id) {
                        return action.moduleToUpdate
                    }
                    else {
                        return module
                    }
                })
            }
            return newStateUpdated
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "FIND_MODULE":
        default:
            return state
    }
}

export default moduleReducer