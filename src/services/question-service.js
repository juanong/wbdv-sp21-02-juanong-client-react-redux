const QUESTIONS_URL = process.env.REACT_APP_QUESTIONS_URL

export const findQuestionsForQuiz = (quizId) => {
    return fetch(`${QUESTIONS_URL}/${quizId}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}

export default api