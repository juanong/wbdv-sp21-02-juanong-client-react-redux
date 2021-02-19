import React from 'react'
import CourseCard from "./course-card/course-card";
import CourseHeader from "./course-header/course-header";
import SecondaryHeader from "./course-grid-secondary-headeer/course-grid-secondary-header";

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
    <div>
        <CourseHeader addCourse={addCourse}/>
        <SecondaryHeader/>
        <div className="row">
            {
                courses.map((course, ndx) =>
                    <CourseCard course = {course}
                                deleteCourse = {() => deleteCourse(course)}
                                key = {ndx}/>
                )
            }
        </div>
    </div>


export default CourseGrid