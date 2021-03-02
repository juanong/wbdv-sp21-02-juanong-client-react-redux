const initialState = {
    topics: [
        {_id: 987, title: "Topic 1"},
        {_id: 876, title: "Topic 2"},
        {_id: 765, title: "Topic 3"},
        {_id: 654, title: "Topic 4"},
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
        case "FIND_TOPICS_FOR_LESSON":
        case "FIND_TOPIC":
        case "UPDATE_TOPIC":
            const newStateUpdated = {
                topics: state.topics.map(topic => {
                    if (topic._id === action.topicToUpdate._id) {
                        return action.topicToUpdate
                    }
                    else {
                        return topic
                    }
                })
            }
            return newStateUpdated
        case "DELETE_TOPIC":
            const newStateDeleted = {
                topics: state.topics.filter(topic => topic._id !== action.topicToDelete._id)
            }
            return newStateDeleted
        default:
            return state
    }
}

export default topicReducer
