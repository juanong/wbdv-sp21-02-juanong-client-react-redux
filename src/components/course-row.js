// A course component to represent an individual row in the course table
import React, {useState} from "react"
import {Link} from "react-router-dom"
import '../components/course-table/course-table.style.client.css'

const CourseRow = ({deleteCourse, course, key, lastModified, title, owner}) => {
    // Set the initial editing state of the row by destructing the array that useState returns
    const [editing, setEditing] = useState(false)
    return (<tr>
            <td>
                {!editing &&
                <Link to="/courses/editor">
                    {title}
                </Link>
                }
                {editing &&
                <input className='form-control' type='text' value={title}/>
                }
            </td>
            <td className="d-none d-sm-table-cell text-nowrap">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td className="text-right">
                {editing && <i onClick={() => setEditing(false)}
                   className='fas fa-check jo-header-icon-padding'></i>}
                {!editing && <i onClick={() => setEditing(true)}
                   className="fas fa-pencil-alt jo-header-icon-padding"></i>}
                {/* Notice the onClick parameter is a function */}
                <i onClick={() => deleteCourse(course)}
                   className="fas fa-trash jo-header-icon-padding"></i>
            </td>
        </tr>)
}

export default CourseRow