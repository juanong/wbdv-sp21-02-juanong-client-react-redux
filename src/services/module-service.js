const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001733643/courses'
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001733643/modules'

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(module)
    }).then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(module)
    }).then(response => response.json())

const api = {
    findModulesForCourse,
    createModule,
    deleteModule,
    updateModule
}

export default api