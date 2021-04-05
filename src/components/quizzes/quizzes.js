import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import quizService from '../../services/quiz-service'

const QuizzesList = () => {

    const {courseId} = useParams()

    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        quizService.findAllQuizzes()
            .then(allQuizzes => setQuizzes(allQuizzes))
    }, [])

    return (
        <div>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map(quiz =>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                            <li className="list-group-item">
                                {quiz.title}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    )
}


export default QuizzesList