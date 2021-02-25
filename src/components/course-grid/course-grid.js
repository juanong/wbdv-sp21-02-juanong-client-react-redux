import React from 'react'
import CourseCard from "../course-card/course-card";
import CourseHeader from "../course-header/course-header";
import SecondaryHeader from "../course-grid-secondary-header/course-grid-secondary-header";

// Displays all courses in the server as cards
const CourseGrid = ({courses, deleteCourse, addCourse, updateCourse}) =>
    <div>
        <CourseHeader addCourse={addCourse}/>
        <SecondaryHeader/>
        <div className="card-deck">
        {
            courses.map((course, ndx) =>
                <CourseCard course = {course}
                            title = {course.title}
                            deleteCourse = {deleteCourse}
                            updateCourse = {updateCourse}
                            key = {ndx}/>
            )
        }
        </div>
    </div>


export default CourseGrid