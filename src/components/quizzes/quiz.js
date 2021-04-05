import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import questionService from '../../services/question-service'
import quizService from '../../services/quiz-service'
import TrueFalseQuestion from "./true-false-question";


const Quiz = () => {
    // Get the quiz ID from the URL
    const {quizId} = useParams()

    const [quizTitle, setQuizTitle] = useState("")
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        quizService.findQuizById(quizId)
            .then(quiz => setQuizTitle(quiz.title))
        questionService.findQuestionsForQuiz(quizId)
            .then(returnedQs => setQuestions(returnedQs))
    }, [])

    return (
        <div>
            <h2>
                {quizTitle}
            </h2>
            <div>
                {
                    questions.map(q =>
                    <div>
                        {
                            q.type === "TRUE_FALSE" &&
                            <TrueFalseQuestion question={q}/>
                        }
                        {
                            q.type === "MULTIPLE_CHOICE" &&
                                <>
                                    MC Question
                                </>
                        }
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Quiz