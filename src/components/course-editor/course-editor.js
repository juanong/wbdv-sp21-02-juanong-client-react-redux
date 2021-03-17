import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import './course-editor.style.client.css'
import courseService from "../../services/course-service"
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list";

// Combine our reducers into a super reducer
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

// Create a store from the super reducer
const store = createStore(reducer)

const CourseEditor = () => {
    // Parse the courseID URL parameters
    const {layout, courseId} = useParams()

    // Use the courseId and a hook to find the course title
    const [courseTitle, setCourseTitle] = useState("")

    // Just try console logging the course by using findCoursebyId
    const findCourseById = (id) => {
        courseService.findCourseById(id)
            .then(foundCourse => setCourseTitle(foundCourse.title))
    }

    useEffect(() => findCourseById(courseId))

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
                                <h5>{courseTitle}</h5>
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
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor