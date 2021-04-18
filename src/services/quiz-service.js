const QUIZZES_URL = 'http://localhost:3001/api/quizzes'

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

export const findQuizById = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json())
}

export const submitQuiz = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())
}

export const findQuizAttemptsById = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json())
}

const api = {
    findAllQuizzes,
    findQuizById,
    submitQuiz,
    findQuizAttemptsById
}

export default api