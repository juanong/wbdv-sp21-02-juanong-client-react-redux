const QUIZZES_URL = 'http://localhost:3000/api/quizzes'

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

export const findQuizById = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json())
}

const api = {
    findAllQuizzes,
    findQuizById
}

export default api