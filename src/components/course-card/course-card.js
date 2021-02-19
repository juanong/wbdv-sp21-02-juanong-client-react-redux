import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './course-card.style.client.css'

// Important: parameters must be in curly brackets
const CourseCard = ({deleteCourse, course, key}) => {

    const [editing, setEditing] = useState(false)
    return (<div className="card jo-card-dimensions">
        <div className="card-body">
            {
                !editing && <h5 className="card-title text-nowrap">{course.title}</h5>
            }
            {
                editing && <input className='form-control' value={course.title}/>
            }
            <p className="card-text">{course.description}</p>
            <span className='text-nowrap'>
                <Link to='/courses/editor'>
                    <a className="btn btn-primary">{course.title}</a>
                </Link>
                <i onClick={deleteCourse} className="fas fa-trash float-right"></i>
            </span>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='text-right'>
                {editing && <i onClick={() => setEditing(false)} className='fas fa-check'></i>}
                {!editing && <i onClick={() => setEditing(true)} className='fas fa-pencil-alt'></i>}
            </div>
        </div>
    </div>)
}


export default CourseCard