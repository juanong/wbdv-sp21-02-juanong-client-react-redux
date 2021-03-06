const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001733643/lessons'
const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001733643/topics'

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopic = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(topic)
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(topic)
    }).then(response => response.json())

const api = {
    findTopicsForLesson,
    createTopic,
    deleteTopic,
    updateTopic
}

export default api