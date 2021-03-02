import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const TopicPills = (
    {
        topics = [],
        deleteTopic = () => alert("Error deleting topic"),
        updateTopic = () => alert("Error updating topic")
    }) =>
    <div className='container'>
        <div>
            <ul className='nav nav-pills nav-fill'>
                {
                    topics.map(topic =>
                        <li className='nav-item jo-topic-pill jo-background-gray rounded'>
                            <h5><a className='nav-link' href='#'>
                                <EditableItem
                                    updateItem={updateTopic}
                                    deleteItem={deleteTopic}
                                    item={topic}/>
                            </a></h5>
                        </li>
                    )
                }
                <li className='nav-item jo-topic-pill jo-topics-plus-format'>
                    <i className='fas fa-plus'></i>
                </li>
            </ul>
        </div>
    </div>

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        deleteTopic: (item) => dispatch({type: "DELETE_TOPIC", topicToDelete: item}),
        updateTopic: (item) => dispatch({type: "UPDATE_TOPIC", topicToUpdate: item})
    }
}

export default connect(stpm, dtpm)(TopicPills)

