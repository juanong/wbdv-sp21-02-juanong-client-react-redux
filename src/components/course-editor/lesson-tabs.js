import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'

const LessonTabs = (
    {
        lessons=[],
        deleteLesson = () => alert("Error deleting lesson"),
        updateLesson = () => alert("Unable to update lesson")
    }) => {

    const {layout, courseId, moduleId} = useParams();
    console.log(layout, courseId, moduleId)

    return (
        <div>
            <h3>{courseId} {moduleId}</h3>
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
                    <a href="#"><i className='fas fa-plus'></i></a>
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
        deleteLesson: (item) => dispatch({
            type: "DELETE_LESSON",
            lessonToDelete: item
        }),
        updateLesson: (item) => dispatch({
            type: "UPDATE_LESSON",
            lessonToUpdate: item
        })
    }
}

export default connect(stpm, dtpm)(LessonTabs)