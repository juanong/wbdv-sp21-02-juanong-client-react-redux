import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[],
        deleteLesson = () => alert("Error deleting lesson"),
        updateLesson = () => alert("Unable to update lesson"),
        findLessonsForModule = () => alert("Unable to load lessons"),
        createLesson = () => alert("Unable to create lesson"),
        clearLessons
    }) => {

    const {layout, courseId, moduleId, lessonId} = useParams();

    // The lesson tabs need to be notified of a module change

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
        else {
            clearLessons()
        }
    }, [moduleId, courseId])

    return (
        <div>
            <ul className='nav nav-tabs nav-fill'>
                {
                    lessons.map(lesson =>
                        <li className='nav-item jo-tab-spacing'>
                            <a className={`nav-link ${lesson._id === lessonId ? 'active': ''}`}>
                                <h5>
                                <EditableItem
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                    updateItem={updateLesson}
                                    deleteItem={deleteLesson}
                                    item={lesson}/>
                                </h5>
                            </a>
                        </li>
                    )
                }
                {/* Only give the option to create a new lesson if there is a module selected */}
                {moduleId !== "undefined" && typeof moduleId !== "undefined" &&
                    <li className='nav-item jo-tab-spacing'>
                        <i onClick={
                            () => createLesson(moduleId)
                        }
                           className='fas fa-plus'></i>
                    </li>
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => {
    return {

        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(lesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: lesson
                }))
        },

        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons
                }))
        },

        deleteLesson: (lesson) => {
            lessonService.deleteLesson(lesson._id)
                .then(lessonToDelete => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: lesson
                }))
        },

        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(updatedLesson => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                }))
        },

        clearLessons: () =>
            dispatch({
                type: "CLEAR_LESSONS"
            })
    }
}

export default connect(stpm, dtpm)(LessonTabs)