const initialState = {
    lessons : []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "FIND_LESSON":
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.updatedLesson._id) {
                        return action.updatedLesson
                    } else {
                        return lesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
            }
        default:
            return state
    }
}

export default lessonReducer