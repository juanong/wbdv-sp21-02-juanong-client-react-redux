const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001733643/courses'

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

const api = {
    findModulesForCourse
}

export default api