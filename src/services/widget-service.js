// This widget service will communicate with our created java server

export const findWidgetsForTopic = (tid) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
        .then(widgets => widgets.json())


export const findAllWidgets = () =>
    fetch("http://localhost:8080/api/widgets")
        .then(widgets => widgets.json())

export const createWidgetForTopic = (tid, widget) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(actualWidget => actualWidget.json())

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE"
    }).then(widget => widget.json())

const api = {
    findAllWidgets,
    findWidgetsForTopic,
    createWidgetForTopic,
    deleteWidget
}

export default api