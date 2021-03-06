import React, {useState} from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
// Don't forget the curly brackets
import {Route} from 'react-router-dom'
import courseService from "../services/course-service";
import Home from "./home";
import "../index.css"

// This class is responsible for rendering and managing all components of the course manager
class CourseManager extends React.Component {
    // We put the courses array in a state so that we can refresh the DOM when it changes
    // Courses is at this level so that it can be shared by multiple components
    state = {
        courses: []
    }

    // Initialize the state courses array to contain everything in the server
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
    }

    // Delete the specified course from the server and the local array
    deleteCourse = (courseToDelete) => {
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
                <Route path="/home">
                    <Home/>
                </Route>
                {/* Pass the courses array and the functions down to the child components */}
                <Route path="/courses/display/table">
                    <CourseTable courses={this.state.courses}
                                 deleteCourse={this.deleteCourse}
                                 updateCourse={this.updateCourse}
                                 addCourse={this.addCourse}/>
                </Route>
                <Route path="/courses/display/grid">
                    <CourseGrid courses={this.state.courses}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                addCourse={this.addCourse}/>
                </Route>
                {/*Implement path variables in our URL to the editor (layout and editor)*/}
                <Route path={[
                    "/courses/:layout/edit/:courseId/",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId"]} exact={true}>
                    <CourseEditor courses={this.state.courses}/>
                </Route>
            </div>
        )
    }
}

export default CourseManager