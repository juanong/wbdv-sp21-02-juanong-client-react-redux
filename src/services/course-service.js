const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001733643/courses'

// Export all of our functions

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {'content-type': 'application/json'}})
        .then(response => response.json())

export const findCourseById = (id) => {}

export const updateCourse = (id, course) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(course)})
        .then(response => response.json())

export const deleteCourse = (id) =>
    fetch(`${COURSES_URL}/${id}`, {method: 'DELETE'})
        .then(response => response.json())


// Use this to export the functions
export default {
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse,
    findCourseById
}

