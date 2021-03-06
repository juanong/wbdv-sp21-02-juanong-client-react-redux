import React from 'react'
import {Link, useParams} from 'react-router-dom'
import './course-editor.style.client.css'
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service"

// Combine our reducers into a super reducer
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

// Create a store from the super reducer
const store = createStore(reducer)

const CourseEditor = ({courses}) => {
    // Parse the courseID URL parameters
    const {layout, courseId} = useParams()

    //const currCourse = (courses.find(course => course._id === courseId)).title

    // Use the courseID to find the course title
    //const courseTitle = courses.find(course => course._id === courseId)

    return (
        <Provider store={store}>
            <div>
                <div className="row bg-secondary jo-editor-header-padding shadow">
                    <div>
                        <ul className="list-inline">
                            <li className="list-inline-item
                               jo-x-right-padding
                               jo-color-light-gray">
                                {/* Use layout param to navigate to previous course display */}
                                <Link to={`/courses/display/${layout}`}>
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item
                               jo-color-white">
                                <h5>{courseId}</h5>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className='col-sm-4 bg-dark shadow-lg'>
                        <ModuleList/>
                    </div>
                    <div className="col-sm-8">

                        <LessonTabs/>

                        <TopicPills/>

                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor