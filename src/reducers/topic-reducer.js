const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
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
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicToDelete._id)
            }

        case "CLEAR_TOPICS":
            return {
                ...state,
                topics: []
            }
        default:
            return state
    }
}

export default topicReducer
