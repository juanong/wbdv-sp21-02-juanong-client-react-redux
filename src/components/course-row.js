// A course component to represent an individual row in the course table
import React, {useState} from "react"
import {Link} from "react-router-dom"
import '../components/course-table/course-table.style.client.css'

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

    return (<tr>
            <td>
                {!editing &&
                <Link to="/courses/editor">
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
            <td className="d-none d-sm-table-cell text-nowrap">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td className="text-right">
                {
                    editing &&
                        <i onClick={() => saveTitle()} className='fas fa-check jo-header-icon-padding'></i>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="fas fa-pencil-alt jo-header-icon-padding"></i>
                }
                <i onClick={() => deleteCourse(course)} className='fas fa-times jo-header-icon-padding'></i>
            </td>
        </tr>)
}

export default CourseRow