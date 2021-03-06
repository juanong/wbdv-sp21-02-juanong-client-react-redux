const initialState = {
    lessons : []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
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
                lessons: state.lessons.map(currLesson => {
                    if (currLesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return currLesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
            }

        case "CLEAR_LESSONS":
            return {
                ...state,
                lessons: []
            }
        default:
            return state
    }
}

export default lessonReducer