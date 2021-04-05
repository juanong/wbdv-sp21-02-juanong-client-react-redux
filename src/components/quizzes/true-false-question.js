import React, {useState} from 'react'
import './quizzes.style.client.css'

const TrueFalseQuestion = ({question}) => {

    const [currAnswer, setCurrAnswer] = useState("")
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

    const correctAnswer = question.correct

    return (
        <div className="jo-quiz-question-spacing">
            <h4>
                {question.question}
                <span className="float-right">
                    {
                        isCorrectAnswer !== null && isCorrectAnswer &&
                        <i className="fas fa-check jo-color-green"></i>
                    }
                    {
                        isCorrectAnswer !== null && !isCorrectAnswer &&
                        <i className="fas fa-times jo-color-red"></i>
                    }
                </span>
            </h4>
            <ul className="list-group">
                <li className =
                        {
                            `list-group-item 
                            ${isCorrectAnswer !== null && correctAnswer === "true" ? "list-group-item-success" : ""}
                            ${isCorrectAnswer !== null && currAnswer === "true" && correctAnswer !== "true" ? "list-group-item-danger": ""}`
                        }>
                    <input type="radio"
                           name={question._id}
                           id={`${question._id}_true`}
                           onChange={() => {
                               setCurrAnswer("true")
                               setIsCorrectAnswer(null)
                           }}/>
                    <label for={`${question._id}_true`}>TRUE</label>
                    <span className="float-right">
                        {
                            isCorrectAnswer !== null && correctAnswer === "true" &&
                            <i className="fas fa-check"></i>

                        }
                        {
                            isCorrectAnswer !== null && currAnswer === "true" && correctAnswer !== "true" &&
                            <i className="fas fa-times"></i>
                        }
                    </span>
                </li>
                <li className=
                        {
                            `list-group-item 
                            ${isCorrectAnswer !== null && correctAnswer === "false" ? "list-group-item-success" : ""}
                            ${isCorrectAnswer !== null && currAnswer === "false" && correctAnswer !== "false" ? "list-group-item-danger": ""}`
                        }>
                    <input type="radio"
                           name={question._id}
                           id={`${question._id}_false`}
                           onChange={() => {
                               setCurrAnswer("false")
                               setIsCorrectAnswer(null)
                           }}/>
                    <label for={`${question._id}_false`}>FALSE</label>
                    <span className="float-right">
                        {
                            isCorrectAnswer !== null && correctAnswer === "false" &&
                            <i className="fas fa-check"></i>

                        }
                        {
                            isCorrectAnswer !== null && currAnswer === "false" && correctAnswer !== "false" &&
                            <i className="fas fa-times"></i>
                        }
                    </span>
                </li>
            </ul>
            <br/>
            <p>Your answer: {currAnswer}</p>
            <button className={`btn btn-success ${currAnswer === "" ? "disabled" : ""}`}
                    onClick={() => {currAnswer === correctAnswer ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)}}>
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion