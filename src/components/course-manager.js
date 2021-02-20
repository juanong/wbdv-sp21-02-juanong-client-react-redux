import React, {useState} from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor/course-editor";
// Don't forget the curly brackets
import {Route} from 'react-router-dom'
import courseService from "../services/course-service";

// This class is responsible for rendering and managing all components of the course manager
class CourseManager extends React.Component {
    // We put the courses array in a state so that we can refresh the DOM when it changes
    // Courses is at this level so that it can be shared by multiple components
    state = {
        courses: []
    }

    // This React function resets the state
    componentDidMount = () =>
        courseService.findAllCourses()
            .then(actualCourses => this.setState(
                {courses: actualCourses}))


    // All functions that change the state of our DOM need to go here, and pass things down to each component
    addCourse = (newCourseTitle) => {
        // Get the created date
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()
        const formattedDate = month + "/" + day + "/" + year

        const newCourse = {
            title: newCourseTitle,
            description: "Some description",
            owner: "me",
            lastModified: formattedDate
        }
        // Post the new course to the server
        courseService.createCourse(newCourse)
            .then(course => {
                this.setState((prevState) => {
                    let nextState = {}
                    nextState.courses = prevState.courses
                    nextState.courses.push(course)
                    return nextState
                })
            })
        // This is an alternate syntax to the code above
        //.then(course => this.setState(
        //    (prevState) => ({
        //        ...prevState,
        //        courses: [
        //            ...prevState.courses,
        //            course
        //        ]
        //    })))
    }

    deleteCourse = (courseToDelete) => {
        console.log(courseToDelete)
        // Once the server comes back with a status, we remove the course locally and reset state
        return courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => {
                    // Define the next state based on the old state
                    let nextState = {}
                    nextState.courses = prevState.courses.filter(course => course !== courseToDelete)
                    return nextState
                })
            })
    }


    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                // Grab all the existing courses except the update one
                courses: prevState.courses.map(c => {
                    if(c._id === course._id) {
                        return course
                    }
                    else {
                        return c
                    }
                })
            })))
    }
    // This render function is like calling main
    render() {
        return (
            <div>
                {/* Pass the courses array and the functions down to the child components */}
                <Route path="/courses/table">
                    <CourseTable courses={this.state.courses}
                                 deleteCourse={this.deleteCourse}
                                 updateCourse={this.updateCourse}
                                 addCourse={this.addCourse}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid courses={this.state.courses}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                addCourse={this.addCourse}/>
                </Route>
                {/*Use the data Route provides to recall the page called before the editor*/}
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor history={props.history}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager