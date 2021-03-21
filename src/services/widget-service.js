// This widget service will communicate with our created java server

const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`)
        .then(widgets => widgets.json())


export const findAllWidgets = () =>
    fetch(`${WIDGET_URL}/widgets`)
        .then(widgets => widgets.json())

export const createWidgetForTopic = (tid, widget) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(actualWidget => actualWidget.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "DELETE"
    }).then(widget => widget.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }}).then(updatedWidget => updatedWidget.json())

const api = {
    findAllWidgets,
    findWidgetsForTopic,
    createWidgetForTopic,
    deleteWidget,
    updateWidget
}

export default api