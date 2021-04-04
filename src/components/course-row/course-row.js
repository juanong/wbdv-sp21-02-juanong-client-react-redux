// A course component to represent an individual row in the course table
import React, {useState} from "react"
import {Link} from "react-router-dom"
import '../course-table/course-table.style.client.css'
import '../../index.css'

// The course row element displays a course as a single row in the course table
const CourseRow = ({deleteCourse, updateCourse, course, key, lastModified, title, owner}) => {
    // Set the initial editing state of the row by destructing the array that useState returns
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    // The link of each row will have the course ID
    return (
        <tr>
            <td>
                {!editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                    {title}
                </Link>
                }
                {editing &&
                <input onChange={(event)=>{setNewTitle(event.target.value)}}
                       className='form-control'
                       type='text'
                       value={newTitle}/>
                }
            </td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td className="d-none d-sm-table-cell text-nowrap">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td className="text-right">
                {
                    editing &&
                        <div>
                            <i onClick={() => saveTitle()}
                               className='fas fa-check jo-header-icon-padding jo-color-green'></i>
                            <i onClick={() => {
                                setEditing(false)
                                return deleteCourse(course)}
                            } className='fas fa-times jo-header-icon-padding jo-color-red'></i>
                        </div>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit jo-header-icon-padding jo-color-blue"></i>
                }
            </td>
        </tr>)
}

export default CourseRow