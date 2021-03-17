import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
        topics = [],
        findTopicsForLesson = () => alert("Error finding topics"),
        createTopic = () => alert("Error creating topic"),
        deleteTopic = () => alert("Error deleting topic"),
        updateTopic = () => alert("Error updating topic"),
        clearTopics
    }) => {

    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined"
            && moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
        else {
            clearTopics()
        }
    }, [moduleId, lessonId])

    return (
        <div className='container'>
            <div>
                <ul className='nav nav-pills nav-fill'>
                    {
                        topics.map(topic =>
                            <li className='nav-item jo-topic-pill jo-background-gray rounded'>
                                <h5 className='nav-link'>
                                    <EditableItem
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                        updateItem={updateTopic}
                                        deleteItem={deleteTopic}
                                        item={topic}/>
                                </h5>
                            </li>
                        )
                    }
                    {/* Only give the option to add a new topic if there is a lesson selected */}
                    {lessonId !== "undefined" && typeof lessonId !== "undefined" &&
                        <li className='nav-item jo-topic-pill jo-topics-plus-format'>
                            <i onClick={() => createTopic(lessonId)} className='fas fa-plus'></i>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics
                }))
        },

        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(newTopic => dispatch({
                    type: "CREATE_TOPIC",
                    newTopic
                }))
        },

        deleteTopic: (topic) => {
            topicService.deleteTopic(topic._id)
                .then(topicToDelete => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: topic
                }))
        },

        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(topicToUpdate => dispatch({
                    type: "UPDATE_TOPIC",
                    topicToUpdate: topic
                }))
        },

        clearTopics: () =>
            dispatch({
                type: "CLEAR_TOPICS"
            })
    }
}

export default connect(stpm, dtpm)(TopicPills)

