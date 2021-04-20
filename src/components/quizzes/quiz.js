import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import questionService from '../../services/question-service'
import quizService from '../../services/quiz-service'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import ScoresTable from "./scores-table";


const Quiz = () => {
    // Get the quiz ID from the URL
    const {quizId} = useParams()

    const [quizTitle, setQuizTitle] = useState("")
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(null)
    const [highlighted, setHighlighted] = useState(false)

    const [attempts, setAttempts] = useState([])

    useEffect(() => {
        quizService.findQuizById(quizId)
            .then(quiz => setQuizTitle(quiz.title))
        questionService.findQuestionsForQuiz(quizId)
            .then(returnedQs => setQuestions(returnedQs))
        quizService.findQuizAttemptsById(quizId)
            .then(attempts => setAttempts(attempts))
    }, [])

    return (
        <div>
            <h2>
                {quizTitle}
            </h2>
            {score !== null &&
                <h5>Score: {score}</h5>
            }
            <div>
                {
                    questions.map(q =>
                    <div>
                        {
                            q.type === "TRUE_FALSE" &&
                            <TrueFalseQuestion question={q} setQuestions={setQuestions} allQuestions={questions}
                                               highlighted={highlighted}/>
                        }
                        {
                            q.type === "MULTIPLE_CHOICE" &&
                            <MultipleChoiceQuestion question={q} setQuestions={setQuestions} allQuestions={questions}
                                                    highlighted={highlighted}/>
                        }
                    </div>
                    )
                }
            </div>
            <button className="btn btn-primary" onClick={() => {
                quizService.submitQuiz(quizId, questions).then(results => {
                    setScore(results.score)
                    setHighlighted(true)
                })
            }}>Submit Quiz</button>
            <br/>
            <br/>
            <ScoresTable attempts={attempts}/>
            <br/>
            <br/>
        </div>
    )
}

export default Quiz