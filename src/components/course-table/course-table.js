import React from 'react'
import CourseRow from "../course-row/course-row";
import {Link} from 'react-router-dom';
import CourseHeader from "../course-header/course-header";
// With react, we just import CSS files instead of linking them like in HTML
import './course-table.style.client.css';


// This class represents the course-table component, which displays all courses in the server as a single table
export default class CourseTable extends React.Component {

    // Use the constructor and super class to inherit the courses array through props
    constructor(props) {
        super(props)
    }
    // Whatever is returned in the render function is what is actually executed
    render() {
        return (
            <div>
                <CourseHeader addCourse={this.props.addCourse}/>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="jo-title-col h4">Title</th>
                        <th className="jo-owner-col
                                        d-none
                                        d-sm-table-cell h4">Owner</th>
                        <th className="jo-modified-col
                                        d-none
                                        d-lg-table-cell h4">
                            Last Modified By
                        </th>
                        <th className="jo-icons-col">
                            <div className="text-nowrap float-right">
                                <i className="fas fa-folder fa-2x jo-header-icon-padding"></i>
                                <i className="fas fa-sort-alpha-up fa-2x jo-header-icon-padding"></i>
                                <Link to="/courses/display/grid">
                                    <i className="fas fa-th fa-2x jo-header-icon-padding"></i>
                                </Link>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        // Use map to dynamically create the course rows
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                // Give the row access to the delete and update functions
                                deleteCourse = {this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                // Pass the course to the row
                                course = {course}
                                // Give each row a unique identifier
                                key = {ndx}
                                title = {course.title}
                                owner = {course.owner}
                                lastModified = {course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}