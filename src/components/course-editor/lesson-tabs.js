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
        createLesson = () => alert("Unable to create lesson")
    }) => {

    const {layout, courseId, moduleId} = useParams();

    // The lesson tabs need to be notified of a module change

    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId])



    return (
        <div>
            <ul className='nav nav-tabs nav-fill'>
                {
                    lessons.map(lesson =>
                        <li className='nav-item jo-tab-spacing'>
                            <a className='nav-link'>
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
                <li className='nav-item jo-tab-spacing'>
                    <i onClick={() => createLesson(moduleId)} className='fas fa-plus'></i>
                </li>
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

        deleteLesson: (module) => {
            lessonService.deleteLesson(module._id)
                .then(lessonToDelete => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: module
                }))
        },

        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(updatedLesson => dispatch({
                    type: "UPDATE_LESSON",
                    updatedLesson: lesson
                }))
        }
    }
}

export default connect(stpm, dtpm)(LessonTabs)