const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(item => item.id !== action.deletedWidget.id)
            }
        default:
            return state
    }
}

export default widgetReducer