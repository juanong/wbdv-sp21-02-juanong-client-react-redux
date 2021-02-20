import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './course-card.style.client.css'

// Important: parameters must be in curly brackets
const CourseCard = ({deleteCourse, updateCourse, course, title, key}) => {

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

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
            <div className="card-body card-block">
                {
                    editing && <div className='text-right'>
                        <i onClick={() => saveTitle()} className='fas fa-check jo-color-green'></i>
                        <i onClick={deleteCourse}
                           className='fas fa-times jo-color-red'></i>
                    </div>
                }

                {
                    !editing && <h5 className="card-title text-truncate">{title}</h5>
                }
                {
                    editing && <input onChange={(event => {setNewTitle(event.target.value)})}
                                      className='form-control'
                                      value={newTitle}/>
                }
                <p className="card-text">{course.description}</p>
                <span>
                    <Link to='/courses/editor'>
                        <a className="btn btn-primary btn-text">{title}</a>
                    </Link>
                </span>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='text-right'>
                    {!editing && <i onClick={() => setEditing(true)}
                                    className='fas fa-pencil-alt'></i>}
                </div>
            </div>
            </div>
    </div>)
}


export default CourseCard