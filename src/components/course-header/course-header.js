import React, {useState} from "react";
import './course-header.style.client.css'
import courseService from "../../services/course-service";

const CourseHeader = ({addCourse}) => {
    const [newCourseTitle, setNewCourseTitle] = useState("")
    return (<div className='row jo-page-header-margins'>
        <div className='col-1'>
            <i className="fas fa-bars fa-2x"></i>
        </div>
        <div className='col-3 d-none d-lg-block text-nowrap'>
            <h2>Course Manager</h2>
        </div>
        <div className='col-7 new-course-title'>
            <input onChange={(event) => setNewCourseTitle(event.target.value)}
                   value={newCourseTitle}
                   className='form-control' type='text'/>
        </div>
        <div className='col-1'>
            <i onClick={() => {
                if (newCourseTitle !== "") {
                    addCourse(newCourseTitle)
                    setNewCourseTitle("")
                }
                else {
                    addCourse("New Course")
                }
            }}
               className='fas fa-plus-circle fa-2x jo-red-plus'></i>
        </div>
    </div>)
}

export default CourseHeader