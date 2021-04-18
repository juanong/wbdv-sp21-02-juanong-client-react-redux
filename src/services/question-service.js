const QUESTIONS_URL = 'http://localhost:3001/api/quizzes'

export const findQuestionsForQuiz = (quizId) => {
    return fetch(`${QUESTIONS_URL}/${quizId}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}

export default api