import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {findAllWidgets} from "../../services/widget-service";
import widgetService from "../../services/widget-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import './widgets.style.client.css';

const WidgetList = (
    {
        findWidgetsForTopic = () => (alert("Could not find widgets")),
        findAllWidgets = () => (console.log("Could not find widgets")),
        createWidgetForTopic = () => {},
        deleteWidget = () => {},
        updateWidget = () => {},
        myWidgets = []
    }
    ) => {

    // Get the URL parameters
    const {topicId} = useParams()

    const [editingWidget, setEditingWidget] = useState({})

    // Get all the widgets for the current topic upon loading
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return (
        <div>
            <h3>Current widget: {editingWidget.id}</h3>
            <ul className="list-group jo-widget-list">
                {
                    myWidgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                    <>
                                        <i onClick={() => {
                                            updateWidget()
                                            setEditingWidget({})
                                        }
                                        } className="fas fa-check float-right">
                                        </i>
                                        <i onClick={() => {
                                            deleteWidget(widget)
                                            setEditingWidget({})
                                        }
                                        } className="fas fa-trash float-right">
                                        </i>
                                    </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                    <>
                                        <i onClick={() => setEditingWidget(widget)} className="fas fa-cog float-right"></i>
                                    </>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing = {editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing = {editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>)
                }
            </ul>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus float-right"></i>
        </div>
    )
}

const stpm = (state) => {
    return {
        myWidgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        findAllWidgets: () => {
            widgetService.findAllWidgets()
                .then(widgets => dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets
                }))
        },

        findWidgetsForTopic: (tid) => {
            widgetService.findWidgetsForTopic(tid)
                .then(widgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets
                }))
        },

        createWidgetForTopic: (tid) => {
            widgetService.createWidgetForTopic(tid,
                {type: "HEADING", size: 1, text: "New Widget"})
                .then(newWidget => dispatch({
                    type: "CREATE_WIDGET",
                    newWidget
                }))
        },

        deleteWidget: (widget) => {
            widgetService.deleteWidget(widget.id)
                .then(response => dispatch({
                    type: "DELETE_WIDGET",
                    deletedWidget: widget
                }))
        }
    }
}
export default connect(stpm, dtpm)(WidgetList)