import React, {useState} from 'react'
import './quizzes.style.client.css'

const TrueFalseQuestion = ({question, setQuestions, allQuestions, highlighted}) => {

    const [currAnswer, setCurrAnswer] = useState("")
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

    const correctAnswer = question.correct

    const updateQuestion = (choice) => {
        setCurrAnswer(choice)
        setIsCorrectAnswer(choice === correctAnswer)
        let questionsCopy = [...allQuestions]
        const qIndex = allQuestions.findIndex(q => q._id === question._id)
        questionsCopy[qIndex] = {...question, answer: choice}
        setQuestions(questionsCopy)
    }

    // To avoid code duplication, create an array of "choices"
    const choices = ["true", "false"]

    return (
        <div className="jo-quiz-question-spacing">
            <h4>
                {question.question}
                <span className="float-right">
                    {
                        isCorrectAnswer !== null && isCorrectAnswer && highlighted &&
                        <i className="fas fa-check jo-color-green"></i>
                    }
                    {
                        isCorrectAnswer !== null && !isCorrectAnswer && highlighted &&
                        <i className="fas fa-times jo-color-red"></i>
                    }
                </span>
            </h4>
            <ul className="list-group">

                {
                    choices.map((choice, ndx) =>
                        <li className=
                                {
                                    `list-group-item 
                                    ${isCorrectAnswer !== null && correctAnswer === choice && highlighted ? "list-group-item-success": ""}
                                    ${isCorrectAnswer !== null && currAnswer === choice && correctAnswer !== choice && highlighted ? "list-group-item-danger": ""}`
                                }>
                            <input type="radio"
                                   name={question._id}
                                   id={`${question._id}_${ndx}`}
                                   onChange={() => {
                                       updateQuestion(choice)
                                   }}/>
                            <label for={`${question._id}_${ndx}`}>{choice.toUpperCase()}</label>
                            <span className="float-right">
                                {
                                    isCorrectAnswer !== null && correctAnswer === choice && highlighted &&
                                        <i className="fas fa-check"></i>
                                }
                                {
                                    isCorrectAnswer !== null && currAnswer === choice && correctAnswer !== choice && highlighted &&
                                        <i className="fas fa-times"></i>
                                }
                            </span>
                        </li>
                    )
                }
            </ul>
            <br/>
            <p>Your answer: {currAnswer}</p>
        </div>
    )
}

export default TrueFalseQuestion