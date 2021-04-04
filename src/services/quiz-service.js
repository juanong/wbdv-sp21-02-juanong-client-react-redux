const QUIZZES_URL = 'http://localhost:3000/api/quizzes/'

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

const api = {
    findAllQuizzes
}

export default api