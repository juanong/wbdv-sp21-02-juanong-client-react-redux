import React from 'react'

const ScoresTable = ({attempts}) => {

    return (
        <div>
            <table className="table">
                <tr>
                    <th>Attempt</th>
                    <th>Score</th>
                </tr>
                {attempts.map((attempt, ndx) => {
                    return (
                        <tr>
                            <td>{ndx + 1}</td>
                            <td>{attempt.score}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ScoresTable