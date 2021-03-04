// This reducer handles all states and action information for the ModuleList component

const initialState = {
    modules : []
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            // New state includes all old modules plus the new module given by the dispatcher
            return {
                modules : [
                    ...state.modules,
                    action.newModule
                ]
            }
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module._id !== action.moduleToDelete._id)
            }
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => {
                    if (module._id === action.updatedModule._id) {
                        return action.updatedModule
                    } else {
                        return module
                    }
                })
            }
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