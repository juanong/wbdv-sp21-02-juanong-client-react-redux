const initialState = {
    lessons : [
        {_id: "000", title: "Lesson 1"},
        {_id: "001", title: "Lesson 2"},
        {_id: "002", title: "Lesson 3"},
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
        case "FIND_LESSONS_FOR_MODULE":
        case "FIND_LESSON":
        case "UPDATE_LESSON":
            const newStateUpdated = {
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lessonToUpdate._id) {
                        return action.lessonToUpdate
                    }
                    else {
                        return lesson
                    }
                })
            }
            return newStateUpdated
        case "DELETE_LESSON":
            const newStateDeleted = {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
            }
            return newStateDeleted
        default:
            return state
    }
}

export default lessonReducer